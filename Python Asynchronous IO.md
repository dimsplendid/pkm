---
aliases: 
tags: python 
date created: Sunday, May 15th 2022, 4:13:35 pm
date modified: Sunday, May 15th 2022, 4:13:35 pm
title: Python Asynchronous IO
---

# Python Asynchronous IO

Basically, this is a way to make I/O operations non-blocking and allow the program to perform other tasks while the read or write operation is ongoing. The main motivation behind this is that I/O operations are *slow*: reading from disk, network requests are a *million* times slower than reading from RAM or processing instruction.

> [!Question]
> For the long calculation work, should I use this or task queue?



