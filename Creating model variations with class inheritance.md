---
aliases: 
tags: python/fastapi python web 
date created: Tuesday, May 24th 2022, 11:27:08 am
date modified: Tuesday, May 24th 2022, 11:27:08 am
title: Creating model variations with class inheritance
---

# Creating Model Variations with Class Inheritance

In [[Customizing the response]], we need to replicate the code a lot, but we can use the inheritance to make the code lighter and cleaner.

> [!Hint] Dictionary
> **excerpt**
> _noun_
> a short extract from a film, broadcast, or piece of music or writing
> _verb_
> tack (a short extract) from a text

```python
class PostBase(BaseModel):
	title: str
	content: str

	def exerpt(self) -> str:
		return f"{self.content[:140]}..."

class PostPublic(PostBase):
	id: int
	...
```


While not strictly required, the inheritance approach is a good way to avoid code duplication and bugs.
