---
aliases: 
tags: python/fastapi python web
date created: Sunday, May 15th 2022, 4:13:35 pm
date modified: Monday, May 16th 2022, 12:17:37 am
title: Python Asynchronous IO
---

# Python Asynchronous IO

Basically, this is a way to make I/O operations non-blocking and allow the program to perform other tasks while the read or write operation is ongoing. The main motivation behind this is that I/O operations are *slow*: reading from disk, network requests are a *million* times slower than reading from RAM or processing instruction.

> [!Question]
> For the long calculation work, should I use this or task queue?

For simple scripts this is not the issue. But when situation like loading a image from web server, if it needs 10 seconds, the other request also need to wait for this.

To solve this, traditional Python web servers using  **WSGI**(Web Server Gateway Interface), such as Flask and [[Django]], spawn several **workers**. Those are sub-processes of the web server that are all able to answer requests. If one is busy processing a long request, others can answer new coming requests.

With asynchronous I/O, a single process won't block when processing a request with a long I/O operation.

This is achieved through the concept of an **event loop**. Underneath, it relies upon the operating system `select` and `poll` calls. [^1][^2]

> [!Note]
> 如何不慣 C ？

Not long after, the spiritual successor of WSGI for asynchronous-enabled web servers, **ASGI**(Asynchronous Server Gateway Interface), was introduced. [[FastAPI]] relies on this, and this is one of the reasons why it shows such great performance.

When you wish to define an asynchronous function, just add the `async` before `def`. This allows you to use the `await` inside it. Such async functions are called **coroutines**.

```python
async def f():
	...
	await another_f()
	... # would excecute after another_f() finish (wait)
```

With `async/await` keywords, writing code that just looks like synchronous code.

> [!Warning]
> **Choose third-party library carefully**
> The main pitfalls of `asyncio`: writing code in a coroutine _doesn't necessarily mean_ that it won't block. Regular operations such as computations are blocking and will block the event loop. The only operations that won't block are proper I/O operations that _designed_ to work asynchronously. This is different from **multiprocessing** where operations are executed on child processes, which, in nature, doesn't block the main one.

> [!Question]
> 1. 所以我最早 JS 版本的 child process 算是誤打誤撞的 **Non-blocking**
> 2. 那對於耗時的工作怎麼辦？Django 可以用 [[Celery]] 做 task queue 的樣子(雖然還沒嘗試過)

## Ref

[^1]: [Async IO on Linux: select, poll, and epoll (jvns.ca)](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/)
[^2]: [高效 Web 伺服器開發 - HackMD](https://hackmd.io/@sysprog/fast-web-server)