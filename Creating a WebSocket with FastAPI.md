---
aliases: 
tags: python/fastapi web/websocket 
title: Creating A WebSocket with FastAPI
date created: Tuesday, August 2nd 2022, 10:11:51 am
date modified: Tuesday, August 2nd 2022, 10:12:15 am
---

# Creating A WebSocket with FastAPI

FastAPI has built-in support to serve WebSockets and can define this in a minute, but things would get more complex as we try to add more features. Let's start simple, wait for messages and simply echo.

**`app.py`**

```python
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message received: {data}")
    except WebSocketDisconnect:
        await websocket.close()
```

 Status or response model are not available in WebSockets.
 Thanks to asynchronous, this infinite loop would not block the whole server process.