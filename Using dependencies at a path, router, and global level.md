---
aliases: 
tags: fastapi python web 
date created: Thursday, May 26th 2022, 1:14:29 pm
date modified: Thursday, May 26th 2022, 11:54:46 pm
title: 'Using Dependencies at a Path, Router, and Global Level'
---

# Using Dependencies at a Path, Router, and Global Level

We can even expand the dependency at a whole router and even whole FastAPI application.

The main motivation for this is to be able to apply some global request validation or perform side logic on several routes without the need to add the dependency on each endpoint. Typically, an authentication method or a rate-limiter could be very good candidates for this use case.

> [!Note]
> In this situation, it just like the Django's middleware.

## Use a Dependency on a Path Decorator

```python
def secret_header(secret_header: str | None = Header(None)) -> None:
    if not secret_header or secret_header != "SECRET_VALUE":
        raise HTTPException(status.HTTP_403_FORBIDDEN)
    
@app.get("/protected-route", dependencies=[Depends(secret_header)])
async def protected_route():
    return {"hello": "world"}
```

For better way to secure our API, see more in [[Managing Authentication and Security in FastAPI]]

## Use a Dependency on a Whole Router

There are tow ways to do this.

1. In the `APIRouter`
```python
def secret_header(secret_header: str | None = Header(None)) -> None:
    if not secret_header or secret_header != "SECRET_VALUE":
        raise HTTPException(status.HTTP_403_FORBIDDEN)
    
router = APIRouter(dependencies=[Depends(secret_header)])

...

app = FastAPI()
app.include_router(router, prefix="/router")
```

2. In the `include_router`
```python
router = APIRouter()

...

app = FastAPI()
app.include_router(router, prefix="/router",
                   dependencies=[Depends(secret_header)])
```

These two work the same, so chose which is more clear and sense in the situation. Such as we could ask us, _Does this router work without this dependency if we run it independently?_

## Use a Dependency on a Whole Application

The method is always the same.

```python
def secret_header(secret_header: str | None = Header(None)) -> None:
    if not secret_header or secret_header != "SECRET_VALUE":
        raise HTTPException(status.HTTP_403_FORBIDDEN)

app = FastAPI(dependencies=[Depends(secret_header)])

```

![[Dependency Decision Tree.png]]