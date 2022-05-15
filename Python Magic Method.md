---
aliases: 
tags: python 
date created: Saturday, May 14th 2022, 5:30:10 pm
date modified: Saturday, May 14th 2022, 5:30:10 pm
title: Python Magic Method
---

# Python Magic Method
- some pre-defined method start and end with dunder like `__eq__`
- make instance a callable object: `__call__`

```python
class Counter:
	def __init__(self):
		self.counter = 0

	def __call__(self, inc=1):
		self.counter += 1

c = Counter()
print(c.counter) # 0
c()
print(c.counter) # 1
c(10)
print(c.counter) # 11
```