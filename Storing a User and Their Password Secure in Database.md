---
aliases: python/fastapi web security
date created: Monday, August 1st 2022, 10:20:04 pm
date modified: Monday, August 1st 2022, 10:20:06 pm
tags: 
title: Storing a User and Their Password Secure in Database
---

# Storing a User and Their Password Secure in Database

## Creating Models and Tables

**`models.py`**

```python
class UserBase(BaseModel):
    email: EmailStr
    
    class Config:
        orm_mode = True
        

class UserCreate(UserBase):
    password: str
    

class User(UserBase):
    id: int
    

class UserDB(User):
    hashed_password: str
```

See the different between `UserCreate` and `UserDB`.

And the corresponding Tortoise models:

**`models.py`**

```python
class UserTortoise(Model):
    id = fields.IntField(pk=True, generated=True)
    email = fields.CharField(
        index=True, unique=True, null=False, max_length=255)
    hashed_password = fields.CharField(null=False, max_length=255)
    
    class Meta:
        table = "users"
```

> [!Danger]
> Don't store password as plain text

> [!Question]
> Maybe I can use singular and plural name to separate the Pydantic and ORM models? e.g. user vs users, product vs products. Is these clear enough?

## Hashing Passwords

```bash
$ pip install passlib[bcrypt]
```

```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
```

`CryptContext` is a very useful class since it allows us to work with different hash algorithms. If, one day, a better algorithm than `bcrypt` emerges, we can just add it to our allowed schemes. New passwords will be hashed using the new algorithm, but existing passwords will still be recognized (and optionally upgraded to the new algorithm).

## Implementing Registration Routes

**`app.py`**

```python
@app.post("/register", status_code=status.HTTP_201_CREATED)
async def register(user: UserCreate) -> User:
	# We shouldhash the password before inserting it into our database
    hashed_password = get_password_hash(user.password)
    
    try:
        user_tortoise = await UserTortoise.create(
            **user.dict(), hashed_password=hashed_password
        )
    except IntegrityError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail='Email already exists',
        )

	# return User, not UserDB
    return User.from_orm(user_tortoise)
```

Call `get_password_hash` on the input password before inserting the user into the database.