---
aliases: 
tags: python/fastapi database 
date created: Tuesday, June 7th 2022, 4:53:19 pm
date modified: Friday, June 24th 2022, 4:07:11 pm
title: Communicating with a SQL Database with Tortoise ORM
---

# Communicating with a SQL Database with Tortoise ORM

We want to abstract the operation the the SQL and only deal with proper objects from programming language.

> [!Note]
> 畢竟從一開始，OOP 和 SQL 的設計就背道而馳。

> [!Hint]
> **[[Tortoise ORM]]**[^1] is an easy-to-use `asyncio` ORM inspired by Django.
> > 這樣我應該可以輕易入門吧 XD

## Creating Database Models

**`models.py`**

Tortoise ORM:

```python
class PostTortoise(Model):
    id = fields.IntField(pk=True, generated=True)
    publication_date = fields.DatetimeField(null=False)
    title = fields.CharField(max_length=255, null=False)
    content = fields.TextField(null=False)
    
    class Meta:
	    # control the table name
        table = "posts"
```

Pydantic:

```python
class PostBase(BaseModel):
    title: str
    content: str
    publication_date: datetime = Field(default_factory=datetime.now)
    
    class Config:
	    # Allow us to transform an ORM object instance into a Pydatic
	    # ojbect instance.
        orm_mode = True
```

> [!Note]
> 我發現他這裡的 pydantic model 和 database model 會定義在一個檔案。不過對於更大、更複雜的狀況，應該要如同官網範例上一般拆開。

> [!Question]
> 1. 現在的 `partialUpdate` 幾乎要重寫整個 model, 應該會有更好的方法？
> 	- 不過 Pydantic 作為驗證的功能，同一個 ORM 下用不同的 Pydantic model 讀入和回饋看起來不錯呢。讓我再繼續看下去
> 2. Pydantic model 和 ORM model 需要大量重複 (這點 Django 已經自動完成了)
>

> [!Check] Answer
> Tortoise ORM 確實有自動生成 Pydantic Model 的功能，但也因此犠牲了 Pydantic 的彈性。當然還是可以嘗試是否合適。

## Setting up the Tortoise Engine

We have to configure the Tortoise engine to set the database connection string and the location of our models. To do this, Tortoise comes with a utility function for FastAPI that does all the required task. In particular, it automatically adds event handlers to open and close the connection at startup and shutdown; this is something we had to do by hand with SQLAlchemy.

**`app.py`**

```python
TORTOISE_ORM = {
    "connections": {
        "default": "sqlite:///chapter6_tortoise_relationship.db",
    },
    "app": { # declare all modules containing the Tortoise models.
        "models": {
            "models": ["tortoise_relationship.models", "aerich.models"],
            "default_connection": "default",
        },
    },
}

register_tortoise(
    app, # FastAPI instance
    config=TORTOISE_ORM, # Configuration that define above
    generate_schemas=True, # automatically create the table's schema
    add_exception_handlers=True, # add cutom exception handlers to FastAPI
)
```

- The `connections` key associating a database, following the standard convention format.[^2] In most projects, we'll probably have one database named default, but it allows us to set several databases if needed.
- In the `apps` key, you'll be able to declare all your modules containing your Tortoise models. The first key just below apps, that is, `models`, will be the **prefix** with which you'll be able to refer to the associated models. You can name it how you want, but if you place all your models under the same scope, then `models` is a good candidate. This prefix is especially import when defining **foreign keys**.

Then, we call the `register_tortoise` function that'll take care of setting up Tortoise for FastAPI.

While `generate_schemas` is useful for testing purposes, in a real-world application, we should have a proper migration system. See more in the last section: [[#Setting up a Database Migration System with Aerich]]

Always make sure call `register_tortoise` at the end of the application file, to ensure everything has been correctly imported.

## Create Objects

> [!Note]
> The same with `SQLAlchemy`, follow the CRUD order

**`app.py`**

```python
@app.post("/posts", 
          response_model=PostPublic, status_code=status.HTTP_201_CREATED)
async def create_post(post: PostCreate) -> PostPublic:
    post_tortoise = await PostTortoise.create(**post.dict())
    await post_tortoise.fetch_related("comments")

	# from_orm available cause we enable orm_mode.
    return PostPublic.from_orm(post_tortoise) 
```

> [!Hint] Can we return a `PostTortoise` object directly?
> Technically, yes, we can. However, doing this would deprive us of all the goodness of using Pydantic models, such as field exclusion or automatic document.

> [!Hint] Dictionary
> **deprive**
> _verb_
> - prevent (a person or place) from having or using something

> [!Question]
> Tortoise 應該也有 bulk create 之類的東東？

## Getting and Filtering Objects

**`app.py`**

```python
@app.get("/posts")
async def list_posts(
    pagination: tuple[int, int] = Depends(pagination)
) -> list[PostDB]:
    skip, limit = pagination
    posts = await PostTortoise.all().offset(skip).limit(limit)
    
    results = [PostDB.from_orm(post) for post in posts]
    
    return results
```

Two step, query and transform to Pydantic.

```python
async def get_post_or_404(id: int) -> PostTortoise:
    try:
        return await PostTortoise.get(id=id).prefetch_related("comments")
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

@app.get("/posts/{id}")
async def get_post(
    post: PostTortoise = Depends(get_post_or_404)
) -> PostPublic:
    return PostPublic.from_orm(post)
```

By default, Tortoise is lazy and doesn't make the additional query. So we need call the `prefetch_related` method on our query.

> [!Note]
> Tortoise ORM 的 chain query 仍有 type hint(SQLAlchemy 或 Django 就沒有), 真不錯

> [!Note]
> 越來越覺得 Dependency 很神奇，很有當初學 Django 那種各種魔術的感覺。不過 Django 的給我的「魔法感」更多就是了，FastAPI 好像就一套 Dependency 玩到底？讓我們繼續看下去。

## Updating and Deleting Objects

```python
@app.patch("/posts/{id}", response_model=PostPublic)
async def update_post(
    post_update: PostPartialUpdate, 
    post: PostTortoise = Depends(get_post_or_404),
) -> PostPublic:
    post.update_from_dict(post_update.dict(exclude_unset=True))
    await post.save()
    
    return PostPublic.from_orm(post)

@app.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(post: PostTortoise = Depends(get_post_or_404)):
    await post.delete()
```

Here, the main point of attention is that we'll operate directly on the post we want to modify. This is one of the key aspects when working with ORM: entities are objects that can be modified as we wish.

> [!Note]
> 和 [[Communicating with a SQL database with SQLAlchemy]] 比較就很清楚了。

## Adding Relationships

> [!Note]
> 我前面記的範例就直接用 relationships 的例子。

**`models.py`**

```python
class CommentTortoise(Model):
    id = fields.IntField(pk=True, generated=True)
    post = fields.ForeignKeyField(
        "models.PostTortoise", related_name="comments", null=True
    )
    publication_date = fields.DatetimeField(null=False)
    content = fields.TextField(null=False)
    
    class Meta:
        table = "comments"
```

The main point is the `post` field, notice that we use the `models` prefix; this is the same one we defined in the Tortoise configuration. And we set the `related_name`. This is a typical and convenient feature of ORM. By doing this, we'll be able to get all the comments of a given post simply by accessing its `comments` property.

> [!Note]
> 必竟是參考 Django。順帶一提，Django 可以自動生成 `[name]_set` 這樣的 related name，而且也不用 `models` 這種前綴，真的很厲害。

**`models.py`**

```python
class CommentBase(BaseModel):
    post_id: int
    publication_date: datetime = Field(default_factory=datetime.now)
    content: str
    
    class Config:
        orm_mode = True
```

When provide `post_id`, Tortoise ORM would understands that we are referring to the identifier of the foreign key field, called `post`

In a REST API, sometimes, it makes sense to automatically retrieve the associated objects of an entity in one request.

**`models.py`**

```python
class PostPublic(PostDB):
    comments: list[CommentDB]

    @validator("comments", pre=True)
    def fetch_comments(cls, v):
        return list(v)
```

Thanks to Tortoise, we can retrieve the comments of a post by simply doing `post.comments`. This is convenient, but this attribute is not directly a list of data: object into a `PostPublict`, Pydantic will try to parse this query set and fail. However, calling `list` on this query set forces it to output the data. That is the purpose of this `validator`. Notice that we set it with `pre=True` to make sure it's called before the built-in Pydantic validation.

## Setting up a Database Migration System with `Aerich`

**`app.py`**

```python

TORTOISE_ORM = {
    "connections": {
        "default": "sqlite:///chapter6_tortoise_relationship.db",
    },
    "apps": {
        "models": {
            "models": ["tortoise_relationship.models", "aerich.models"],
            "default_connection": "default",
        },
    },
}
```

**`bash`**

```bash
$ aerich init -t app.TORTOISE_ORM
```

> [!Note]
> `aerich` can't eat relativity import like `.model`, and need to care about the path. I think this would be very easy when using template to generate project just like Django. But still need to know so I can build from scratch.

In

## Ref

[^1]: [Tortoise ORM — Tortoise ORM v0.17.3 Documentation (tortoise-orm.readthedocs.io)](https://tortoise-orm.readthedocs.io/en/latest/)

[^2]: [Databases — Tortoise ORM v0.17.3 Documentation (tortoise-orm.readthedocs.io)](https://tortoise-orm.readthedocs.io/en/latest/databases.html?highlight=db_url#db-url)