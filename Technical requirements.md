---
aliases: 
tags: python/fastapi web/websocket
title: Technical requirements
date created: Tuesday, August 2nd 2022, 9:27:01 am
date modified: Tuesday, August 2nd 2022, 9:27:04 am
---

# Technical Requirements

We need to run [[Redis]] for this section, the easiest way is using docker

```bash
$ docker run -d --name fastapi-redis -p 6379:6379 redis
```

To run the broker for the example,

```bash
$ pip install "broadcaster[redis]"
```