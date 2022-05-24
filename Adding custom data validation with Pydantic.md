---
aliases: 
tags: fastapi python web 
date created: Tuesday, May 24th 2022, 1:24:01 pm
date modified: Tuesday, May 24th 2022, 1:50:03 pm
title: Adding Custom Data Validation with Pydantic
---

# Adding Custom Data Validation with Pydantic

## Applying Validation at a Field Level

Using `validator` decorator.

```python
class Person(BaseModel):
    first_name: str
    last_name: str
    birthdate: date

    @validator("birthdate")
    def valid_birthdate(cls, v: date):
        delta = date.today() - v
        age = delta.days / 365
        if age > 120:
            raise ValueError("You seem a bit too old!")
        return v
```

Notice that `validator` is a static class method(the first argument is `cls`, being the class itself).

- If the value is not valid, we should raise a `ValueError` with an explicit error message.
- Otherwise, we should return the value that will be assigned in the model. And this **doesn't** need to be the same as the input value: we can modify it to fit our needs. See more in the section _Applying validation before Pydantic parsing_

## Applying Validation at an Object Level

If we need to valid a field depending on another, such as password check. We need to access the whole object data. We can use the `root_validator` decorator.

```python
from pydantic import (
    BaseModel, 
    EmailStr, 
    ValidationError,
    root_validator
)

class UserRegistration(BaseModel):
    email: EmailStr
    password: str
    password_confirmation: str

    @root_validator()
    def passwords_match(cls, values):
        password = values.get("password")
        password_confirmation = values.get(
	        "password_confirmation"
        )
        if password != password_confirmation:
            raise ValueError("Passwords don't match")
        return values
```

## Applying Validation Before Pydantic Parsing

By default, the validators are run after Pydantic has done its parsing work. But sometimes we may wish to provide some custom parsing logic to transform input, that is, we need to run the validator befor Pydantic parser.