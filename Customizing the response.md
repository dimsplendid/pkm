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

### The Response Model

Only show the customized data.

> [!Question]
> I still don't get it. Since we can get the data from query specific data from the database(and this is what I did in django). Why we should define a response model?

> [!Tip]
> In the practice, we repeat many codes, where is **DRY**? Please refer to Ch. 4, [[Managing pydantic Data Models in FastAPI]].

### The Response Parameter

- Custom headers
- Cookie