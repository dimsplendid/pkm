---
aliases: 
tags: database 
date created: Thursday, May 19th 2022, 9:09:14 am
date modified: Thursday, May 19th 2022, 9:09:14 am
title: N+1 Problem
---

# N+1 Problem

主要是因為 Lazy loading，本來這是一個降低和 database 交互的方式。只有真的需要 data 的時候才做資料庫查詢。

但在 for 迴圈中，如果要使用 Foreign key 的資料，就會出現每比資料都要再查詢一次的問題，Anti-pattern.

在 Django ORM 中可以預先用 annotation 的方式將需要的資料先查詢再做迴圈。

[[PonyORM]] 據說有更 elegant 的做法，再確認~