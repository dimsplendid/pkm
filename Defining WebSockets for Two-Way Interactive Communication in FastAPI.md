---
aliases: 
date created: Monday, August 1st 2022, 10:28:55 pm
date modified: Monday, August 1st 2022, 10:28:57 pm
tags: python/fastapi web/websocket
title: Defining WebSockets for Two-Way Interactive Communication in FastAPI
---

# Defining WebSockets for Two-Way Interactive Communication in FastAPI

For some service such as chat room, if working only on HTTP, we need to make requests every second to check the message. The new protocol, **WebSocket**, on the other hand, open a communication channel and can exchange data in real time between client and server.

- [[Technical requirements]]
- [[Understand the principles of two-way communication with WebSockets]]
- [[Creating a WebSocket with FastAPI]]
- [[Handling multiple WebSocket connections and broadcasting messages]]