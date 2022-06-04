---
aliases: 
tags: fastapi python web 
date created: Friday, May 27th 2022, 1:45:53 pm
date modified: Friday, May 27th 2022, 2:40:10 pm
title: Communicating with a SQL Database with SQLAlchemy
---

# Communicating with a SQL Database with SQLAlchemy

![[The interaction between SQLAlchemy Core and the Encode databases.png]]

Needed library [Databases (encode.io)](https://www.encode.io/databases/)

```shell
pip install databases[sqlite]
```

## Creating the Table Schema

```python
metadata = sqlalchemy.MetaData()

posts = sqlalchemy.Table(
    "posts",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer,
                      primary_key=True, autoincrement=True),
    sqlalchemy.Column("publication_date",
                      sqlalchemy.DateTime(), nullalble=False),
    sqlalchemy.Column("title", sqlalchemy.String(length=255), nullable=False),
    sqlalchemy.Column("content", sqlalchemy.text(), nullable=False)
)
```

> 初一看還真的是有點雜亂啊，這麼簡單的 schema 都

`metadata` object: Keep all the information of a database schema together. This should only create once in the whole project and always use the same one throughout.

`Table`: just like excel sheet, and it contains many `Column`s. The first argument is the name of the table, followed by the metadata object. Then list all of the columns that should be defined in our table.

In this practice, we also define the corresponding Pydantic model for the post entity. These must match the SQL definition to avoid any errors from the database when we try to insert a new row later.

## Connecting to a Database

```python
import sqlalchemy
from databases import Database

DATABASE_URL = "sqlite:///chapter_sqlalchemy.db"

# databases allow us to perform asynchronous queries
database = Database(DATABASE_URL)
# standard synchronous connection object provided
# by SQLAlchemy
sqlalchemy_engine = sqlalchemy.create_engine(DATABASE_URL)


def get_database() -> Database:
    return database
```

The `get_database` function is for dependency.

> [!Hint] Use a dependency to retrieve a database instance
> It would totally work if we just import the database. However, it would make our life very hard when trying to implement unit test. With a dependency, FastAPI makes it very easy to swap it with another function. See more in [[Testing an API Asynchronously with pytest and HTTPX]]

```python
@app.on_event("startup")
async def startup():
    await get_database().connect()
    metadata.create_all(sqlalchemy_engine)

@app.on_event("shutdown")
async def shutdown():
    await get_database().disconnect()
```

Decorating functions with the `on_event` decorators allows us to trigger some useful logic when FastAPI starts or stops. In this case, we just connect & disconnect with database.

> [!Note]
> Follow the **CRUD(Create, Read, Update, Delete)**

## Making Insert Queries

```python
@app.post("/posts", response_model=PostDB, status_code=status.HTTP_201_CREATED)
async def create_post(
    post: PostCreate,
    database: Database = Depends(get_database)
) -> PostDB:
	# SQLAlchemy expression language
    insert_query = posts.insert().values(post.dict())

	# Actually perform the query,
	# execute it asynchronously thanks to `database`
    post_id = await database.execute(insert_query)
    
    post_db = await get_post_or_404(post_id, database)
    
    return post_db
```

- Rather than writing SQL queries by hand, we rely on the **SQLAlchemy expression language**, this would produce proper SQL query for different engines.
- This query is built directly from the `posts` object, which is the `Table` instance that we defined earlier.
- If the Pydantic model fits the database schema, we can using `.dict()` method to the `.values()` directly.

