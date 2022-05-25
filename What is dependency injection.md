---
aliases: 
tags: fastapi python web 
date created: Wednesday, May 25th 2022, 3:26:25 pm
date modified: Wednesday, May 25th 2022, 3:26:25 pm
title: What is dependency injection
---

# What is Dependency Injection?

A system can **automatically** instantiate objects and the ones they depend on. The developers' responsible is provide the declaration of how an object should be created.

```python
from fastapi import FastAPI, Header

app = FastAPI()

@app.get("/")
async def header(user_agent: str = Header(...)):
    return {"user_agent": user_agent}
```

The `Header` function has some logic(check, return value etc...) and would automatically get the request object.

However, we don't need to know how `Header` handled the required objects for this operation, we just ask for the value we need. _That's dependency injection._

Admittedly, we could reproduce this example in the function body by picking the `user-agent` property in the headers dictionary of the `Request` object. However, the dependency injection approach has numerous advantages over this:

- The _intent is clear_: you know what the endpoint expects in the request data without reading the function's code.
- You have a _clear separation of concern between the logic of the endpoint and the more generic logic_: the header retrieval and the associated error handling doesn't pollute the rest of the logic; it's self-contained in the dependency function. Besides, it can reused easily in other endpoints.
- In the case of FastAPI, it's used to _generate the OpenAPI schema_ so that the automatic documentation can clearly show which parameters are expected for this endpoint.
>(The same reason with first one, but for computer lol)

FastAPI relies heavily on the dependency injection system and encourages developers to use it to implement their building block.

> [!Question]
> Is this method similar to decoractor?

> [!Hint] Dictionary
> **admittedly**
> _adverb_
> - used to express a concession or recognition that something is the case
> 
> **intent**
> _noun_
> - intention or purpose  
> 
> _adjective_
> 1. determined to do (something)
> 2. (of a look or expression) showing earnest and eager attention

