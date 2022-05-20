---
aliases: 
tags: python fastapi web 
date created: Wednesday, May 18th 2022, 10:51:33 pm
date modified: Wednesday, May 18th 2022, 11:45:24 pm
title: Customizing the Response
---

# Customizing the Response

## Path Operation Parameters

The ___operation___ decorator have lots of options to customize, including response.

> [!Hint] Operation decorator
> ```python
> @app.get("/")
> ...
> @app.post("/another_url")
> ...
> ...
> ```

### The Status Code

The most obvious thing to customize in an HTTP response is the **status code**.

```python
from fastapi import FastAPI, status
from pydantic import BaseModel

class Post(BaseModel):
	title: str
	
app = FastAPI()

@app.post("/posts", status_code=status.HTTP_201_CREATED)
async def create_post(post: Post):
	return post
```

### The Response Model

Only show the customized data.

> [!Question]
> I still don't get it. Since we can get the data from query specific data from the database(and this is what I did in django). Why we should define a response model?

> [!Tip]
> In the practice, we repeat many codes, where is **DRY**? Please refer to Ch. 4, [[Managing pydantic Data Models in FastAPI]].

### The Response Parameter

- Custom headers
- Cookie

Using `Response`

```python
from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/")
async def custom_header(response: Response):
	...
```

And cookie have more options, check the documents[^1][^2].

### Setting the status code dynamically

In the first topic, we see we can set the http status easily, but this can not change when different situation.



## Reference

[^1]: [Responses - Starlette](https://www.starlette.io/responses/#set-cookie)
[^2]: [Set-Cookie - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
