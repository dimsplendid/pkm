---
aliases: 
tags: fastapi python database 
date created: Tuesday, June 7th 2022, 4:53:19 pm
date modified: Thursday, June 9th 2022, 2:49:55 pm
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

**models.py**

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

**app.py**

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
    app,
    config=TORTOISE_ORM,
    generate_schemas=True,
    add_exception_handlers=True,
)
```

- The `connections` key associating a database, following the standard convention format[^2].
- In the `apps` key, you'll be able to declare all your modules containing your Tortoise models. The first key just below apps, that is, `models`, will be the **prefix** with which you'll be able to refer to the associated models. You can name it how you want, but if you place all your models under the same scope, then `models` is a good candidate. This prefix is especially import when defining **foreign keys**.

> [!Note]
> Tortoise ORM 的 chain query 仍有 type hint(SQLAlchemy 就沒有), 真不錯

## Ref

[^1]: [Tortoise ORM — Tortoise ORM v0.17.3 Documentation (tortoise-orm.readthedocs.io)](https://tortoise-orm.readthedocs.io/en/latest/)
[^2]: [Databases — Tortoise ORM v0.17.3 Documentation (tortoise-orm.readthedocs.io)](https://tortoise-orm.readthedocs.io/en/latest/databases.html?highlight=db_url#db-url)