---
aliases: 
tags: fastapi python database 
date created: Tuesday, June 7th 2022, 4:53:19 pm
date modified: Wednesday, June 8th 2022, 9:49:13 pm
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
> 	- 不過 pydantic 作為驗證的功能，同一個 ORM 下用不同的 pydantic model 讀入和回饋看起來不錯呢。讓我再繼續看下去
> 2. Pydantic model 和 ORM model 需要大量重複 (這點 Django 已經自動完成了)

> [!Note]
> Tortoise ORM 的 chain query 仍有 type hint(SQLAlchemy 就沒有), 真不錯


## Ref

[^1]: [Tortoise ORM — Tortoise ORM v0.17.3 Documentation (tortoise-orm.readthedocs.io)](https://tortoise-orm.readthedocs.io/en/latest/)