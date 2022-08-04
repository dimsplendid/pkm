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
        await websocket.close() # The server would close the tunnel as WebSocketDisconnect occur, so this line seems not necceesary
```

 Status or response model are not available in WebSockets.
 Thanks to asynchronous, this infinite loop would not block the whole server process.

> [!Hint]
> The `websocket.accept()` should call first to tell the client that we agree to open the tunnel.

And we use JavaScript to open the WebSocket:

**`script.js`**

```javascript
window.addEventListener('DOMContentLoaded', (event) => {
    const socket = new WebSocket('ws://localhost:8000/ws');

    // Connection opened
    socket.addEventListener('open', function (event) {

        // Send message on form submission
        document.getElementById('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const message = document.getElementById('message').value;

            addMessage(message, 'client');

            socket.send(message);

            event.target.reset();
        });
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        addMessage(event.data, 'server');
    });
});
```

Modern browsers provide a very simple API to interact with WebSockets.
Just instantiate a new `WebSocket` object with the **Uniform Resource Locator(URL)** of the endpoint and wire some event listeners.

## Handling Concurrency

In previous example, server receive the data from client and send back, but the server can send to the client without being at the initiative. While we are waiting, the server could have messages to forward to the client. The `receive_text()` in previous example would be a problem for this scenario. To solve this, we'll rely on more advanced tools of the `asyncio` module.

**`app.py`**

```python
async def echo_message(websocket: WebSocket):
    data = await websocket.receive_text()
    await websocket.send_text(f"Message received: {data}")
    
async def send_time(websocket: WebSocket):
    await asyncio.sleep(10)
    await websocket.send_text(f"It is: {datetime.utcnow().isoformat()}")
    
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            echo_message_task = asyncio.create_task(echo_message(websocket))
            send_time_task = asyncio.create_task(send_time(websocket))
            done, pending = await asyncio.wait(
                {echo_message_task, send_time_task},
                return_when=asyncio.FIRST_COMPLETED,
            )
            for task in pending:
                task.cancel()
            for task in done:
                task.result()
                
    except WebSocketDisconnect:
        await websocket.close()
```

The most interesting part is we call our two functions, wrapped by the `create_task` function of `asyncio`. This transform s the coroutine into a `Task` object.

> [!Note]
> 基本上，`asyncio` 就是做為一個排程器，真有趣。

## Using Dependencies

Since the dependencies are designed with HTTP, this comes with a few drawbacks with WebSocket endpoint

1. Can not use security dependencies like [[Managing Authentication and Security in FastAPI]]
	> see more in [WebSockets - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/advanced/websockets/)
2. Contrary to the HTTP validation error that is handled globally to render a proper 422 error, it doesn't make sense to raise an `HTTPException` in WebSocket. It's better to close the WebSocket connection directly (using `websocket.close()`). There should be a `WebSocketException` in the future. [Add WebSocketException and support for WS handlers by Kludex · Pull Request #1263 · encode/starlette (github.com)](https://github.com/encode/starlette/pull/1263)

> [!Note]
> 不過我暫時還不會用到這個，先看看目前的做法等待就好:D

## See More

1. [The WebSocket API (WebSockets) - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
2. [WebSockets - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/advanced/websockets/)