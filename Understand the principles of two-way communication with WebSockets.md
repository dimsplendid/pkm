---
aliases: 
tags: python/fastapi web/websocket 
title: Understand the principles of two-way communication with WebSockets
date created: Tuesday, August 2nd 2022, 9:42:22 am
date modified: Tuesday, August 2nd 2022, 9:42:23 am
---

# Understand the Principles of Two-way Communication with WebSockets

The name WebSockets is come from the sockets in Unix system. While technically unrelated, they achieve the same goal: to open a *communication channel between two applications*.

And HTTP works only on a request-response principle, which make the implementation of real-time communication difficult and inefficient.

Even if HTTP and WebSocket are different protocols, WebSockets have been designed to work with HTTP. When opening a WebSocket, the connections is first initiated using an HTTP request and then upgraded to a WebSocket tunnel. This makes it compatible out of the box with traditional `80` and `443` ports.

