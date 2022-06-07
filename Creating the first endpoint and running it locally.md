---
aliases: 
tags: python fastapi web 
date created: Wednesday, May 18th 2022, 10:42:08 pm
date modified: Wednesday, May 18th 2022, 10:42:08 pm
title: Creating the first endpoint and running it locally
---

# Creating the First Endpoint and Running it Locally

The setup is pretty simple.

```python
# main.py
from fastapi import FastAPI

app = FastAPI()

...
```

```bash
$ uvicorn main:app
```

> [!Warning]
> Not `uvicorn main.py:app`, it's `uvicorn main:app`

> [!Hint]
> 如果是在不一樣的路徑(上層)，可以這樣
> ```shell
> uvicorn parent_dir.app:app
> ```
>

