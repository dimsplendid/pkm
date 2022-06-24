---
aliases: 
tags: python/fastapi python web 
date created: Tuesday, May 24th 2022, 10:54:25 pm
date modified: Wednesday, May 25th 2022, 12:35:30 am
title: Working with Pydantic Objects
---

# Working with Pydantic Objects

## Converting an Object into a Dictionary

For the nest type, we can use dictionary type and we should use `…` to represent scalar value.

```python
person_include = person.dict(include={"first_name", "last_name"})
print(person_include)

person_exclude = person.dict(exclude={"birthdate", "interestings"})
print(person_exclude)

person_nested_include = person.dict(
    include={
        "first_name": ...,
        "last_name": ...,
        "address": {"city", "country"},
        # or
        # "address": {"city": ..., "country": ...},
    }
)
print(person_nested_include)
```

> [!Note]
> 這大括號語法設計成吃 `set` or `dict` 真的很有趣，強迫正福音(?

If we always need some dictionary of the data, we can also put the method into our class.

```python
class Person(BaseModel):
    first_name: str
    last_name: str
    gender: Gender
    birthdate: date
    interests: list[str]
    address: Address

    def name_dict(self):
        return self.dict(include={"first_name", "last_name"})
```

## Creating an Instance From a Sub-class Object

In the earlier section, [[Creating model variations with class inheritance]], we studied the common pattern of having specific model classes depending on the situation. In particular, you'll have a model dedicated for the creation endpoint, with only the required field for creation, and a database model with all the fields we want to store. And we can use dict() then **unpack** it as parameter:

```python
@app.post(
    "/posts", 
    status_code=status.HTTP_201_CREATED,
    response_model=PostPublic
)
async def create(post_create: PostCreate):
    new_id = max(db.posts.keys() or (0,)) + 1
    
    post = PostDB(
	    id=new_id, # The missing field
	    **post_create.dict() # other fields provide by request
	)
	
    db.posts[new_id] = post
    return post
```

## Updating an Instance with a Partial One

Only update some fields from the request.