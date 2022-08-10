---
aliases: 
date created: Sunday, August 7th 2022, 10:30:46 pm
date modified: Sunday, August 7th 2022, 10:30:47 pm
tags: python/fastapi testing/pytest 
title: Setting up the testing tools for FastAPI with HTTPX
---

# Setting up the Testing Tools for FastAPI with HTTPX

In the [basic official tutorial](https://fastapi.tiangolo.com/tutorial/testing/), using `TestClient` makes things easy, but if we want to test the asynchronous, it's better to do this with `HTTPX`. (This is also at the [advanced test section](https://fastapi.tiangolo.com/advanced/async-tests/).)

Need packages:

- `HTTPX`: The client that will perform  HTTP requests
- `asgi-lifespan`: Manage startup and shutdown events of the FastAPI app
- `pytest-asyncio`: An extension for `pytest` to write asynchronous test.

```bash
pip install httpx asgi-lifespan pytest-asyncio
```

