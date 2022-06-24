---
aliases: 
tags: python/fastapi python web 
date created: Wednesday, May 25th 2022, 4:12:49 pm
date modified: Wednesday, May 25th 2022, 4:12:49 pm
title: Creating and using a function dependency
---

# Creating and Using a Function Dependency

A dependency can be either as a function or a callable class. In this section, we'll focus on the functions.

> [!Note] Type hint of a dependency return value
> We have to type hint the result of our dependency in the path operation arguments, even though we already type hinted the dependency function itself. Unfortunately, this is a limitation of FastAPI and its `Depends` function, which isn't able to forward the type of the dependency function. Therefore, we have to type hint the result by hand.

> [!Hint]
> If using the class dependency, then there's a shortcut.
> ```python
> async def f(p: DependsClass = Depends(DependsClass)):
> 	...
> # is the same with:
> async def f(p: DependsClass = Depends()):
> 	...
>```


## Get an Object or Raise a 404 Error

**404 Not Found** is a perfect situation for dependency injection.