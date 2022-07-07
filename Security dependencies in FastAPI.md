---
aliases: 
tags: python/fastapi web security
date created: Thursday, July 7th 2022, 4:43:03 pm
date modified: Thursday, July 7th 2022, 4:43:03 pm
title: Security dependencies in FastAPI
---

# Security Dependencies in FastAPI

- Basic HTTP authentication
	- User credentials are put into an HTTP header called Authorization.
	- Not very secure since the password appears in every request.
- Cookies
	- Useful way to store static data on the client side.
	- Can contain a session token that can be verified by the server and linked to a specific user.
- Token in the `Authorization` header
	- Probably the most used header in a REST API context.

The injection also play important role for FastAPI when implementing the secure request.

```python
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import APIKeyHeader

# hardcode for testing!
API_TOKEN = 'SECRET_API_TOKEN'

app = FastAPI()
api_key_header = APIKeyHeader(name='token')


@app.get('/protected-route')
async def protected_route(token: str = Depends(api_key_header)):
    if token != API_TOKEN:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)
    return {"hello": "world"}
```