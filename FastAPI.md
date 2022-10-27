---
aliases: 
tags: python/fastapi web data-science
date created: Saturday, May 14th 2022, 10:22:42 am
date modified: Wednesday, June 8th 2022, 3:05:54 pm
title: FastAPI
---

# FastAPI

## Section 1: Introduce to Python and FastAPI

2. [[Python Asynchronous IO]]
3. [[Developing a RESTful API with FastAPI]]
4. [[Managing Pydantic Data Models in FastAPI]]
5. [[Dependency Injections in FastAPI]]

> [!Note]
> 目前看下來，FastAPI endpoint 的習慣也與 Django 不同，不會在後面再加 `/` 或者說，`root` Django 並不需要定義，而 FastAPI 需要。
> ```python
> # Django, at urls.py
> urlpatterns = [
> 	...,
> 	path('some-route/', view=..., name=...),
> 	...,
> ]
> 
> # FastAPI
> @app.get('/some-route')
> async def some_func():
>     ...
> ```
> 目前來說，我是比較喜歡 FastAPI 的風格就是了。

## Section 2: Build and Deploy a Complete Web Backend with FastAPI

6. [[Databases and Asynchronous ORMs]]
7. [[Managing Authentication and Security in FastAPI]]
8. [[Defining WebSockets for Two-Way Interactive Communication in FastAPI]]
9. [[Testing an API Asynchronously with pytest and HTTPX]]
10. [[Deploying a FastAPI Project]]

