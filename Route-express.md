---
date updated: '2021-09-01T19:51:35+08:00'

---

# Route ([[express]])

[Express Tutorial Part 4: Routes and controllers - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

```ad-note
Many frames usually supple these function. So It seems a general tool.
```

The route is the path follow address. Just like the hyperlink of html file. express uisng route to maintain the serve of sites.

```ad-note
More succcinct, URL handling code.
[Express Tutorial Part 4: Routes and controllers - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
```

```javascript
import express from 'express'

const app = express()

app.get('/test', (req, res) => {
	res.send("Route hit /test")
})

app.listen(3000, () => {
	console.log('Server is running on port: 3000')
})
```

For example, using the code above and type `[address]/test`, you can get `Route hit /test` on the site.

## router

As usual, writing all the things in one file is hard to read and maintain. `express` has a convenient function that can make a **sub-app**, and using it later in the main server `app.js`

```javascript
// routes/test.js
import { Router } from 'express'

const router = Router()
// then using it just like app
// like:
router.get('/test', (req, res) => {
	res.send('Route hit /test')
})

export { router as test}
```

```javascript
// app.js
import express from 'express'
import { test } from './routes/test'

const app = express()
app.use(test)

app.listen(3000, () => {
	console.log('Server is running on port: 3000')
})
```

You can get the same result from 1st example.

## Route functions

Using HTTP Verbs like `route.get()`, `route.post()`... and so on.

## Route paths

Besides exact path like `'/'`, `/about`, `/doc`, route paths can use a form of regular expression syntax!

```typescript
app.get(/.*fish$/, function (req, res) {
  ...
})
```

## Route parameters
Route parameters are named URL segments used to capture values at specific positions in the URL
```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
})
```

```ad-note
The URL `/book/create` will be matched by a route like `/book/:bookId` (which will extract a "bookId" value of '`create`'). The first route that matches an incoming URL will be used, so if you want to process `/book/create` URLs separately, their route handler must be defined before your `/book/:bookId` route.
```