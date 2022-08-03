---
aliases: 
date created: Friday, July 8th 2022, 3:22:49 pm
date modified: Monday, August 1st 2022, 10:28:19 pm
tags: python/fastapi web security
title: Retrieving a User and Generating an Access Token
---

# Retrieving a User and Generating an Access Token

After successful registration, the next step is being able to log in: the user will send their credentials and receive an authentication token to access the API.

## Implementing a Database Access Token

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

## Implementing a Login Endpoint

**`app.py`**

```python
@app.post("/token")
async def create_token(
    form_data: OAuth2PasswordRequestForm = Depends(OAuth2PasswordRequestForm)
):
    email = form_data.username
    password = form_data.password
    user = await authenticate(email, password)
    
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    
    token = await create_access_token(user)
    
    return {'access_token': token.access_token, 'token_type': 'bearer'}
```

Using the dependency, we don't need to implement the OAuth2 protocol ourselves.

**`authentication.py`**

```python
async def authenticate(email: str, password: str) -> UserDB | None:
    try:
        user = await UserTortoise.get(email=email)
    except DoesNotExist:
        return None
    
    if not verify_password(password, user.hashed_password):
        return None
    
    return UserDB.from_orm(user)

async def create_access_token(user: UserDB) -> AccessToken:
    access_token = AccessToken(user_id=user.id)
    access_token_tortoise = await AccessTokenTortoise.create(
        **access_token.dict()
    )
    
    return AccessToken.from_orm(access_token_tortoise)
```