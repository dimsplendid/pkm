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

	# return User, not UserDB
    return User.from_orm(user_tortoise)
```

## Retrieving a User and Generating an Access Token

After successful registration, the next step is being able to log in: the user will send their credentials and receive an authentication token to access the API.

### Implementing a database access token

**`models.py`**

```python
class AccessToken(BaseModel):
    user_id: int
    access_token: str = Field(default_factory=generate_token)
    expiration_date: datetime = Field(default_factory=get_expiration_date)
    
    class Config:
        orm_mode = True
```

- `user_id`, which will let us identify the user that corresponds to this token.
- `access_token`, the string that will be passed in the requests to authenticate them. Notice that we defined the `generate_token` function as the default factory; its a simple function living in `password.py` that generates a random secure passphrase. Under the hood, it relies on the standard `secrets` module.
- `expiration_date`, which is the date and time when the access token won't be valid anymore. It's always a good idea to make access tokens expire to mitigate the risk if they are stolen. Here, the `get_expiration_date` factory set a default validity of 24 hours

**`models.py`**

```python
class AccessTokenTortoise(Model):
    access_token = fields.CharField(pk=True, max_length=255)
    user = fields.ForeignKeyField('models.UserTortoise', null=False)
    expiration_date = fields.DatetimeField(null=False)
    
    class Meta:
        table = 'access_tokens'
```

> [!Hint] Dictionary
> **mitigate**
> _verb_
> 1. make (something bad) less severe, serious, or painful
> 2. lessen the gravity of (an offence or mistake)