---
aliases: 
date created: Monday, August 1st 2022, 10:24:55 pm
date modified: Monday, August 1st 2022, 10:26:13 pm
tags: python/fastapi web security todo 
title: Configuring CORS and Protecting Against CSRF Attacks
---

# Configuring CORS and Protecting Against CSRF Attacks

While `Authorization` header, as we've seen so far, could work, there is a better way to handle authentication when working in browsers: **cookies!**

However, this comes with some security challenges. Websites are very common targets for hackers and lots of attacks have emerged over the years.

One of the most typical is **Cross-Site Request forgery(CSRF)**. In the scenario, an attacker on another website tries to trick a user who is currently authenticated with your application to perform a request on your server. Since browsers tend to send cookies with every request, your server wouldn't be able to tell that the request was actually forged.

## Understanding CORS and Configuring it in FastAPI

**`app_with_cors.py`**

```python
app.add_middleware(
    CORSMiddleware, # could catch preflight requests
    allow_origins=["http://localhost:9000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=-1,  # Only for the sake of the example. Remove this in your own project.
)
```

A middleware is a special class that adds global logic to an ASGI application performing things before the request is handled by your path operation functions, and also after to possibly alter the response.

> [!Question]
> What's differenct between injection and the global dependency?

## Implementing Double-submit Cookies to Prevent CSRF Attacks

When relying on cookies to store user credentials, we are exposed to CSRF attacks since browsers will automatically send the cookies to your server.

```bash
$ pip install starlette-csrf
```

```python
@app.post("/login")
async def login(response: Response, email: str = Form(...), password: str = Form(...)):
    user = await authenticate(email, password)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    token = await create_access_token(user)

    response.set_cookie(
        TOKEN_COOKIE_NAME,
        token.access_token,
        max_age=token.max_age(),
        secure=True,
        httponly=True,
        # `lax` is the default value in most browsers and allows
        # the cookie to be sent to sub-domain of the cookie
        # domain but prevent it for other sites.
        samesite="lax",
    )
```

Notice that we use the `Secure` and `HttpOnly` flags for the resulting cookie. This ensures that it's sent only through HTTPS connection and that its value can't be read from JavaScript, respectively.

When checking for the authenticated user, we'll just have to retrieve the token from the cookie that was sent in the request.

**`app.py`**

```python
async def get_current_user(
    token: str = Depends(APIKeyCookie(name=TOKEN_COOKIE_NAME)),
) -> UserTortoise:
    try:
        access_token: AccessTokenTortoise = await AccessTokenTortoise.get(
            access_token=token, expiration_date__gte=timezone.now()
        ).prefetch_related("user")
        return cast(UserTortoise, access_token.user)
    except DoesNotExist:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
```

In the context of a REST API, the most straightforward technique is the double submit cookie pattern. Here is how it works: 

1. The user makes a first request with a method that's considered safe. Typically, this is a GET request.
2. In response, it receives a cookie containing a secret random value; that is, the CSRF token.
3. When making an unsafe request, such as POST, the user will read the CSRF token in the cookies and put the exact same value in a header. Since the browser also sends the cookies it has in memory, the request will contain the token both in the cookie and the header. That's why it's called **double submit**.
4. Before processing the request, the server will compare the CSRF token provided in the header with the one present in the cookie. If they match, it can process the request. Otherwise, it'll throw an error

This is safe for two reason:

1. An attacker on a third-party website can't read the cookies for a domain they don't own. Thus, they have no way of retrieving the CSRF token value.
2. Adding a custom header is against the conditions of “simple requests”. Hence, the browser will have to make a preflight request before sending the request, enforcing the CORS policy.

> [!Note]
> This part is hard to describe in my own words, but I shoud do it later.

And this is why we installed `starlette-csrf`

**`app.py`**

```python
from starlette_csrf import CSRFMiddleware

app.add_middleware(
    CSRFMiddleware,
    secret=CSRF_TOKEN_SECRET,
    sensitive_cookies={TOKEN_COOKIE_NAME},
    cookie_domain="localhost",
)
```