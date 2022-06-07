---
aliases: 
tags: linux 
date created: Monday, May 16th 2022, 10:05:48 pm
date modified: Monday, May 16th 2022, 10:05:48 pm
title: Docker
---

# Docker

直接給你個 docker 做教學，讚喔XD

基本上直接解決環境問題，且網路上直接很多做好的 image 給你用。

> [!Quote]
> 葉德緯：「與其說是神器，不如說是 7-11 的餐盒(?)」[Facebook](https://www.facebook.com/xpendragonx/posts/5009860199103931?notif_id=1652804772041271&notif_t=feedback_reaction_generic&ref=notif)


quote

## Persisting DB

只把 DB 分離出來做掛載，可以讓每次新的 container 讀取同一個 DB，避免因 container 不同而資料要重新建立的問題。

```bash
$ docker volume create todo-db
$ docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
```

## Dev-Mode Container

把現在開發的 code directory 作為掛載點在 container 中執行。

Linux:
```bash
$ docker run -dp 3000:3000 -w /app -v "$(pwd):/app" node:12-alpine sh -c "yarn install && yarn run dev"
```

Windows CMD:
```shell
$ docker run -dp 3000:3000 -w /app -v "%cd%:/app" node:12-alpine sh -c "yarn install && yarn run dev"
```

![[mind_blown.gif]]