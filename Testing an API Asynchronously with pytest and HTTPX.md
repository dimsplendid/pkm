---
aliases: 
date created: Thursday, August 4th 2022, 9:08:03 pm
date modified: Thursday, August 4th 2022, 9:13:27 pm
tags: python/fastapi testing/pytest
title: Testing an API Asynchronously with Pytest and HTTPX
---

# Testing an API Asynchronously with Pytest and HTTPX

- [[Introduce to unit testing with pytest]]
- [[Setting up the testing tools for FastAPI with HTTPX]]
- [[Writing tests for REST API endpoints]]
- [[Writing tests for WebSocket endpoints]]

## Technical Requirement

For testing with a database section, we need a running MongoDB server. The easiest way is, as usually, using docker:

```bash
$ docker run -d --name fastapi-mongo -p 27017:27017 mongo:4.4
```