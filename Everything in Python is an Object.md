---
aliases: 
tags: python 
date created: Wednesday, June 22nd 2022, 1:43:04 pm
date modified: Wednesday, June 22nd 2022, 1:43:04 pm
title: Everything in Python is an Object
---

# Everything in Python is an Object

首先要來定義 Object（物件）是什麼，

在官方文件的說明很單純：

> [!Info] Python 3.10.5 documentation
> **object**[^1]
> Any data with state (attributes or value) and defined behavior (methods). Also the ultimate base class of any [new-style class](https://docs.python.org/3/glossary.html#term-new-style-class).

而以實作(CPython)來說，都是 `PyObject *` 。所以也可以用 `C` 的觀點來說。就是佔據記憶體的一段資料。

> [!Info] C17 STD
> **object**[^2]
> region of data storage in the execution environment, the contents of which can represent values.

而對於 Python 而言，所有的變數、函數、類別都是 Object，可以用 `id()` 來確認是否是同一個資料
> 這也是為什麼會提到 `C object` ，畢竟在實作上 `id()` 其實就對應到記憶體位置。



## Reference

[^1]: [Glossary: Object — Python 3.10.5 documentation](https://docs.python.org/3/glossary.html#term-object)
[^2]: [[C17_STD.pdf]]