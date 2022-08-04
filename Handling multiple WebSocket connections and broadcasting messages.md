---
aliases: 
date created: Tuesday, August 2nd 2022, 11:05:49 am
date modified: Thursday, August 4th 2022, 6:02:04 pm
tags: python/fastapi web/websocket 
title: Handling Multiple WebSocket Connections and Broadcasting Messages
---

# Handling Multiple WebSocket Connections and Broadcasting Messages

The typical use case for WebSocket is to implement real-time communication across multiple clients, such as a chat application. So the role of the server is to *manage all the client connections and broadcast messages to all of them.*

![[Pasted image 20220804132729.png]]

![[Pasted image 20220804132845.png]]

But in production the server would not one but many workers for many requests, and even on many machines, we can not broadcast message like keeping a list of all WebSocket at figure 8.3.

To solve this, we generally rely on message brokers.

![[Pasted image 20220804134111.png]]

In this section, we would use Redis for message broker, which can set up at [[Technical requirements]].

First, we need a broadcaster:

**`app.py`**

```python
broadcast = Broadcast("redis://localhost:6379")
CHANNEL = "CHAT"
```

The `CHANNEL` is the name for publishing and subscribing, in real world this can be generated dynamically for the application such as chat rooms.

Then we define two function to send and receive messages.

**`app.py`**

```python
class MessageEvent(BaseModel):
    username: str
    message: str

async def receive_message(
    websocket: WebSocket,
    username: str,
):
    async with broadcast.subscribe(CHANNEL) as subscriber:
        async for event in subscriber:
            message_event = MessageEvent.parse_raw(event.message)
            # Discard user's own messages
            # in real world, it's better to use 
            # UID(user identifier)
            if message_event.username != username:
                await websocket.send_json(message_event.dict())
                
async def send_message(
	websocket: WebSocket, 
	username: str
):
    data = await websocket.receive_text()
    event = MessageEvent(username=username, message=data)
    await broadcast.publish(CHANNEL, message=event.json())
```

First, we defined a `Pydantic Model` to help us structure the data. Instead of just passing raw strings, we have an object bearing both the message and the username.

The data of the message contains serialized JSON, using `Pydantic.parse_raw` to help us parse the JSON string into an object.

In the same time, we also send the message via JSON thanks to `send_json` method.

The second function, `send_message`, is to publish a message to a broker.

And the following WebSocket endpoint is quite the same with previous ones.

**`app.py`**

```python
@app.websocket("/ws")
async def websocket_endpoint(
    websocket: WebSocket,
    username: str = "Anonymous",
):
    await websocket.accept()
    try:
        while True:
            receive_message_task = asyncio.create_task(
                receive_message(websocket, username)
            )
            send_message_task = asyncio.create_task(
                send_message(websocket, username)
            )
            done, pending = await asyncio.wait(
                {receive_message_task, send_message_task},
                return_when=asyncio.FIRST_COMPLETED,
            )
            for task in pending:
                task.cancel()
            for task in done:
                task.result()
    except WebSocketDisconnect:
        pass
```

Finally, we need to tell FastAPI to open the broker and close when exiting:

**`app.py`**

```python
@app.on_event("startup")
async def startup():
    await broadcast.connect()
    
@app.on_event("shutdown")
async def shutdown():
    await broadcast.disconnect()
```



