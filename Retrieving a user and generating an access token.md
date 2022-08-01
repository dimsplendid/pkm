---
aliases: 
date created: Friday, July 8th 2022, 3:22:49 pm
date modified: Monday, August 1st 2022, 11:44:26 am
tags: python/fastapi web security todo 
title: Retrieving a User and Generating an Access Token
---

# Retrieving a User and Generating an Access Token

## Creating Models and Tables

**`models.py`**

```python
class UserBase(BaseModel):
    email: EmailStr
    
    class Config:
        orm_mode = True
        

class UserCreate(UserBase):
    password: str
    

class User(UserBase):
    id: int
    

class UserDB(User):
    hashed_password: str
```

See the different between `UserCreate` and `UserDB`.

And the corresponding Tortoise models:

**`models.py`**

```python
class UserTortoise(Model):
    id = fields.IntField(pk=True, generated=True)
    email = fields.CharField(
        index=True, unique=True, null=False, max_length=255)
    hashed_password = fields.CharField(null=False, max_length=255)
    
    class Meta:
        table = "users"
```

> [!Danger]
> Don't store password as plain text

> [!Question]
> Maybe I can use singular and plural name to separate the Pydantic and ORM models? e.g. user vs users, product vs products. Is these clear enough?

## Hashing Passwords

```bash
$ pip install passlib[bcrypt]
```

```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
```

`CryptContext` is a very useful class since it allows us to work with different hash algorithms. If, one day, a better algorithm than `bcrypt` emerges, we can just add it to our allowed schemes. New passwords will be hashed using the new algorithm, but existing passwords will still be recognized (and optionally upgraded to the new algorithm).

## Implementing Registration Routes

**`app.py`**

```python
@app.post("/register", status_code=status.HTTP_201_CREATED)
async def register(user: UserCreate) -> User:
	# We shouldhash the password before inserting it into our database
    hashed_password = get_password_hash(user.password)
    
    try:
        user_tortoise = await UserTortoise.create(
            **user.dict(), hashed_password=hashed_password
        )
    except IntegrityError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail='Email already exists',
        )

	# return User, not UserDB
    return User.from_orm(user_tortoise)
```

## Retrieving a User and Generating an Access Token

After successful registration, the next step is being able to log in: the user will send their credentials and receive an authentication token to access the API.

### Implementing a Database Access Token

**`models.py`**

```python
class AccessToken(BaseModel):
    user_id: int
    access_token: str = Field(default_factory=generate_token)
    expiration_date: datetime = Field(default_factory=get_expiration_date)
    
    class Config:
        orm_mode = True
```

- `user_id`, which will let us identify the user that corresponds to this token.
- `access_token`, the string that will be passed in the requests to authenticate them. Notice that we defined the `generate_token` function as the default factory; its a simple function living in `password.py` that generates a random secure passphrase. Under the hood, it relies on the standard `secrets` module.
- `expiration_date`, which is the date and time when the access token won't be valid anymore. It's always a good idea to make access tokens expire to mitigate the risk if they are stolen. Here, the `get_expiration_date` factory set a default validity of 24 hours

**`models.py`**

```python
class AccessTokenTortoise(Model):
    access_token = fields.CharField(pk=True, max_length=255)
    user = fields.ForeignKeyField('models.UserTortoise', null=False)
    expiration_date = fields.DatetimeField(null=False)
    
    class Meta:
        table = 'access_tokens'
```

> [!Hint] Dictionary
> **mitigate**
> _verb_
> 1. make (something bad) less severe, serious, or painful
> 2. lessen the gravity of (an offence or mistake)

### Implementing a Login Endpoint

**`app.py`**

```python
@app.post("/token")
async def create_token(
    form_data: OAuth2PasswordRequestForm = Depends(OAuth2PasswordRequestForm)
):
    email = form_data.username
    password = form_data.password
    user = await authenticate(email, password)
    
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    
    token = await create_access_token(user)
    
    return {'access_token': token.access_token, 'token_type': 'bearer'}
```

Using the dependency, we don't need to implement the OAuth2 protocol ourselves.

**`authentication.py`**

```python
async def authenticate(email: str, password: str) -> UserDB | None:
    try:
        user = await UserTortoise.get(email=email)
    except DoesNotExist:
        return None
    
    if not verify_password(password, user.hashed_password):
        return None
    
    return UserDB.from_orm(user)

async def create_access_token(user: UserDB) -> AccessToken:
    access_token = AccessToken(user_id=user.id)
    access_token_tortoise = await AccessTokenTortoise.create(
        **access_token.dict()
    )
    
    return AccessToken.from_orm(access_token_tortoise)
```

## Securing Endpoints with Access Tokens

Here, we retrieve a token from a request header, but then, we'll have to check the database to see if it's valid.

**`app.py`**

```python
async def get_current_user(
    token: str = Depends(OAuth2PasswordBearer(tokenUrl='/token')),
) -> UserTortoise:
    try:
        access_token: AccessTokenTortoise = await AccessTokenTortoise.get(
            access_token=token, expiration_date__gte=timezone.now()
        ).prefetch_related('user')
        return cast(UserTortoise, access_token.user)
    except DoesNotExist:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
```

The `OAuth2PasswordBearer` dependency goes hand in hand with `OAuth2PasswordRequestForm` in [[#Implementing a Login Endpoint|previous section]]. It not only checks for the access token in the `Authorization` header, but it also informs the OpenAPI schema that the endpoint to get a fresh token is `/token`.

As the authentication system is complete, we can protect our endpoints simply by injecting this dependency.

**`app.py`**

```python
@app.get("/protected-route", response_model=User)
async def proteced_route(user: UserDB = Depends(get_current_user)):
    return User.from_orm(user)
```

The patterns we showed here are good candidates for a REST API, which is called externally by other client programs. However, you may wish to call your API from a very common piece of software: the browser. In this case, there are some additional security considerations to take care of.

## Configuring CORS and Protecting Against CSRF Attacks

While `Authorization` header, as we've seen so far, could work, there is a better way to handle authentication when working in browsers: **cookies!**

However, this comes with some security challenges. Websites are very common targets for hackers and lots of attacks have emerged over the years.

One of the most typical is **Cross-Site Request forgery(CSRF)**. In the scenario, an attacker on another website tries to trick a user who is currently authenticated with your application to perform a request on your server. Since browsers tend to send cookies with every request, your server wouldn't be able to tell that the request was actually forged.

### Understanding CORS and Configuring it in FastAPI

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

### Implementing double-submit cookies to prevent CSRF attacks

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