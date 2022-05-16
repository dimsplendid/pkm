---
aliases: 
tags: python web fastapi 
date created: Monday, May 16th 2022, 12:25:53 am
date modified: Monday, May 16th 2022, 1:14:53 am
title: Developing a RESTful API
---

# Developing a RESTful API

- Creating the first endpoint and running it locally
- Handling request parameters
- Customizing the response
- Structuring a bigger project with multiple routers
> (Voron, 2021. p. 80)[^1]

## Creating the first endpoint and running it locally

```python
# main.py
from fastapi import FastAPI

app = FastAPI()

...
```

```bash
uvicorn main:app
```

> [!Warning]
> Not `uvicorn main.py:app`, it's `uvicorn main:app`

## Handling request parameters 

FastAPI handle path parameter declaratively and automatically retrieve them in the request and apply validations based on the type hints!

**Limiting allowed values** can still lean on type hints.

If the type hints is not enough, FastAPI provide convenience functions.

```python
from fastapi import FastAPI, Path
...
@app.get(/some_route/{id})
async def f(id: int = Path(..., ge=1)):
	...
```

> [!Hint]
> `Path` is used as a _default value_ for the `id` argument in the path operation function. So FastAPI using the **ellipsis**(`...`) syntax to denote it's required.

> [!Note]
> 充滿了各種歡樂 coding



## Ref

[^1]: F. Voron, _Building Data Science Applications with FastAPI: Develop, Manage, and Deploy Efficient Machine Learning Applications with Python_ (2021).