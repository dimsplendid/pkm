# Using Python scripts in Node.js server
ref: https://www.ivarprudnikov.com/nodejs-server-running-python-scripts/

## Using child process
```javascript=
child_process.spawn()
```
> 目前 tdtoolkit_web 是使用 python-shell，不過開啟時需要 Loading moduled 相當費時，有沒有好的方法？
```javascript=
const path = require('path')
const {spawn} = require('child_process')

/**
 * Run python script, pass in `-u` to not buffer console output 
 * @return {ChildProcess}
 */
function runScript(){
  return spawn('python', [
    "-u", // prevent Python from buffering output
    path.join(__dirname, 'script.py'),
    "--foo", "some value for foo",
  ]);
}

const subprocess = runScript()

// print output of script
subprocess.stdout.on('data', (data) => {
  console.log(`data:${data}`);
});
subprocess.stderr.on('data', (data) => {
  console.log(`error:${data}`);
});
subprocess.on('close', () => {
  console.log("Closed");
});
```
In [[express]] framework, we can use `pipe` to send the output to respones.
```javascript=
const express = require('express')
const app = express()

// <...>

app.get('/run', function (req, res) {
  const subprocess = runScript()
  res.set('Content-Type', 'text/plain');
  subprocess.stdout.pipe(res)
  subprocess.stderr.pipe(res)
})

app.listen(8080, () => console.log('Server running'))
```
But this method need client understand that response is chunked or to wait for script finished.
## Using WebSocket to render output
To send back script output in chuncks, we could use [[WebSockets]].

```javascript
// server.js
const express = require('express')
const app = express()
const http = require("http")
const WebSocket = require("ws")
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(`You sent -> ${message}`);
  });
  ws.send('Connection with WebSocket server initialized');
});

server.listen(8080, () => console.log('Server running'))
```

```javascript
// client.js
var conn = {}
function openConnection() {
  if (conn.readyState === undefined || conn.readyState > 1) {
    conn = new WebSocket('ws://' + window.location.host + '/');
    conn.onopen = function () {
      console.log("Socket open")
    };
    conn.onmessage = function (event) {
      console.log(event.data)
    };
    conn.onclose = function (event) {
      console.log("Socket closed")
    };
  }
}
if (window.WebSocket === undefined) {
  console.log("Sockets not supported")
} else {
  openConnection();
}
```