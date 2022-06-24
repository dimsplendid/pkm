---
aliases: 
tags: python/fastapi python 
date created: Saturday, May 21st 2022, 11:03:17 am
date modified: Saturday, May 21st 2022, 11:03:17 am
title: Defining models and their field types with Pydantic
---

# Defining Models and Their Field Types with Pydantic

- Just write name and type hint. 
- The nest structure can use dictionary, and Pydantic would validate it automatically.
- The optional and default value is also straightforward. But don' assign default values such as this for dynamic types. Just like assign dynamic default number to function, it would just evaluate once.
> [!Warning]
> ```python
> class Model(BaseModel):
> # Don't do this.
> # This example shows you why it doesn't work.
> 	d: datetime = datetime.now()
> ```
> Using the parameter `default_factory` in `pydantic.Field` to do this

- For more validation type see the official documentation[^1]

## Ref

[^1]: [Field Types - pydantic (helpmanual.io)](https://pydantic-docs.helpmanual.io/usage/types/#pydantic-types)