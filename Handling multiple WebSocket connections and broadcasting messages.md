---
aliases: 
tags: python/fastapi web/websocket 
title: Handling Multiple WebSocket Connections and Broadcasting Messages
date created: Tuesday, August 2nd 2022, 11:05:49 am
date modified: Tuesday, August 2nd 2022, 11:05:53 am
---

# Handling Multiple WebSocket Connections and Broadcasting Messages

The typical use case for WebSocket is to implement real-time communication across multiple clients, such as a chat application. So the role of the server is to *manage all the client connections and broadcast messages to all of them.*

![[Pasted image 20220804132729.png]]

![[Pasted image 20220804132845.png]]

But in production the server would not one but many workers for many requests, and even on many machines, we can not broadcast message like keeping a list of all WebSocket at figure 8.3.

To solve this, we generally rely on message brokers.

![[Pasted image 20220804134111.png]]

In this section, we would use Redis for message broker, which can set up at [[Technical requirements]].


