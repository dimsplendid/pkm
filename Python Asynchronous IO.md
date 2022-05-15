---
aliases: 
tags: python web
date created: Sunday, May 15th 2022, 4:13:35 pm
date modified: Sunday, May 15th 2022, 4:13:35 pm
title: Python Asynchronous IO
---

# Python Asynchronous IO

Basically, this is a way to make I/O operations non-blocking and allow the program to perform other tasks while the read or write operation is ongoing. The main motivation behind this is that I/O operations are *slow*: reading from disk, network requests are a *million* times slower than reading from RAM or processing instruction.

> [!Question]
> For the long calculation work, should I use this or task queue?

For simple scripts this is not the issue. But when situation like loading a image from web server, if it needs 10 seconds, the other request also need to wait for this.

To solve this, traditional Python web servers using  **WSGI**(Web Server Gateway Interface), such as Flask and [[Django]], spawn several **workers**. Those are sub-processes of the web server 

