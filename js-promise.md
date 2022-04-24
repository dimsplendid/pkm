---
date updated: '2021-08-14T01:48:21+08:00'

---

# Promise

ref: [使用 Promise - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Using_promises)
A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object representing the eventual completion or failure of an asynchronous operation.
For a tranditional success/failure usage, we can write two callback function

```javascript=
function successCallback(result) {
	console.log("It succeeded with " + result)
}
function failureCallback(error) {
	console.log("It failed with " + error)
}
doSomething(successCallback, failureCallback)
```

> 不過目前我有用到的 error handler 都是用類似如下的方式：
>
> ```javascript=
> somefunc(arg..., (err, output) => {
>     ...
>     if (err) {
>         err_handler(err)
>     } else {
>         doSomeThing(output)
>     }
> })
> ```
>
> 或是背後應該有用類似的機制……？

New Methods:

```javascript=
let promise = doSomething();
promise.then(successCallback, failureCallback)
```

Or just,

```javascript=
doSomething().then(successCallback, failureCallback)
```

```ad-note
[JavaScript Async (w3schools.com)](https://www.w3schools.com/js/js_async.asp)
_"async and await make promises easier to write"_
`async` makes a function return a Promise
`await` makes a function wait for a Promise
```

