---
aliases: [Python-Decorator]
tags: python
linter-yaml-title-alias: Python-Decorator
date-created: Saturday, February 18th 2023, 11:01:04 pm
date-modified: Wednesday, August 2nd 2023, 3:41:28 pm
---

[Decorator in Python - Data Science Simplified (mathdatasimplified.com)](https://mathdatasimplified.com/2023/07/27/decorator-in-python-2/?utm_source=mailpoet&utm_medium=email&utm_campaign=the-latest-newsletter-total-posts-from-our-blog_2)

```python
import time
def time_func(func):
	def wrapper(*args, **kwargs):
		start = time.time()
		func(*args, **kwargs)
		end = time.time()
		print(f"Elapsed time: {(end - start) * 1000:.3f} ms")
	return wrapper

@time_func
def add(num1: int, num2: int):
	print(f"Add {num1} and {num2}")
	return num1 + num2

@time_func
def multiply(num1: int, num2: int):
	print(f"Multiply {num1} and {num2}")
	return num1 * num2

add(1, 2)
multiply(1, 2)
"""
Add 1 and 2
Elapsed time: 1.006 ms
Multiply 1 and 2
Elabsed time: 0.027 ms
"""
```

If you want to apply a common piece of functionality to multiple functions while keeping the code clean, use a decorator. Decorator modifies the behavior of your Python functions without altering the code directly.

In the code above, `time_func` is a decorator that can be used to track the execution time of any function.