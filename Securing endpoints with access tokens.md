---
aliases: 
date created: Monday, August 1st 2022, 10:22:26 pm
date modified: Monday, August 1st 2022, 10:23:20 pm
tags: python/fastapi web security
title: Securing Endpoints with Access Tokens
---

# Securing Endpoints with Access Tokens

Here, we retrieve a token from a request header, but then, we'll have to check the database to see if it's valid.

**`app.py`**

```python
async def get_current_user(
    token: str = Depends(OAuth2PasswordBearer(tokenUrl='/token')),
) -> UserTortoise:
    try:
        access_token: AccessTokenTortoise = await AccessTokenTortoise.get(
            access_token=token, expiration_date__gte=timezone.now()
        ).prefetch_related('user')
        return cast(UserTortoise, access_token.user)
    except DoesNotExist:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
```

The `OAuth2PasswordBearer` dependency goes hand in hand with `OAuth2PasswordRequestForm` in [[Retrieving a user and generating an access token#Implementing a Login Endpoint|previous section]]. It not only checks for the access token in the `Authorization` header, but it also informs the OpenAPI schema that the endpoint to get a fresh token is `/token`.

As the authentication system is complete, we can protect our endpoints simply by injecting this dependency.

**`app.py`**

```python
@app.get("/protected-route", response_model=User)
async def proteced_route(user: UserDB = Depends(get_current_user)):
    return User.from_orm(user)
```

The patterns we showed here are good candidates for a REST API, which is called externally by other client programs. However, you may wish to call your API from a very common piece of software: the browser. In this case, there are some additional security considerations to take care of.