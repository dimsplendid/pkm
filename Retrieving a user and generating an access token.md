---
aliases: 
tags: python/fastapi web security 
date created: Friday, July 8th 2022, 3:22:49 pm
date modified: Tuesday, July 12th 2022, 2:50:07 pm
title: Retrieving a User and Generating an Access Token
---

# Retrieving a User and Generating an Access Token

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
        
    return User.from_orm(user_tortoise)
```

## Retrieving a User and Generating an Access Token

### Implementing a database access token

