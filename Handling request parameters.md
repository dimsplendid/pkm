---
aliases: 
tags: python python/fastapi 
date created: Wednesday, May 18th 2022, 10:48:06 pm
date modified: Wednesday, May 18th 2022, 10:48:50 pm
title: Handling Request Parameters
---

# Handling Request Parameters

## Parse Url Parameter

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
> `Path` is used as a _default value_ for the `id` argument in the path operation function. So FastAPI using the **ellipsis**(`…`) syntax to denote it's required.

> [!Note]
> 充滿了各種歡樂 coding

## Parse Structure Data

The syntax of request body and form is quite the same. The difference is their encoding.

```python
from fastapi import FastAPI, Body, Form

app = FastAPI()
# request body
@app.post("/user_rb"):
async def user_rb(name: str = Body(...), age: int = Body(...)):
	...

# form
@app.post("/user_f")
async def user_f(name: str = Form(...), age: int = Form(...)):
	...

```

And the request method is different:

The request body:
```bash
# Request Body
$ http -v POST host/user_rb name="John" age=30
# Or...
# For more complex JSON structure, it's advided that pipe a formatted JSON 
# into HTTPie rather than use parameters.
$ echo '{"name": "John", "age": 30}' | http POST host/user_rb
```

> [!Warning]
> In CMD, it seems the different new line because you can't use the second method. I still don't know how to fix it.

The Form
```bash
# Form
$ http -v --form POST host/user_f name=John age=30
```

Contrast to JSON payloads, FastAPI can't define `pydantic` models to validate form data

## File Uploads

> [!Hint]
> Need install python-multipart first.
> ```bash
> pip install python-multipart
> ```

Using the parameter function, `File`

```python
from fastapi import FastAPI, File

app = FastAPI()

@app.post("/files")
async def upload_file(file: bytes = File(...)):
	...
```

But a **file-like** object should have some interface(metadata) and maybe large(run out of your memory!). So FastAPI provide a convenient type: `UploadFile`

```python
from fastapi import FastAPI, File, UploadFile
...
@app.post("/files")
async def upload_file(file: UploadFile = File(...)):
	...
```

With the `UploadFile` type, we can manipulate it as a regular file in Python.

## Cookie and Header

Can use to build authentication features.
```python
from fastapi import FastAPI, Cookie

app = FastAPI()

@app.get("/")
async def get_cookie(hello: str | None = Cookie(None)):
    return {"hello": hello}
```

> [!Note]
> And the state of browser, such as the result between different data
> Or maybe there is a better way later.

## Request Object

Access a raw request object with all the data associated with it.

```python
from fastapi import FastAPI, Request
app = FastAPI()
@app.get("/")
async def get_request_object(request: Request):
	return {"path": request.url.path}
```

> [!Hint]
> The `Request` object is from `Starlette`, see more in the [official documentation](https://www.starlette.io/requests/).[^1]
