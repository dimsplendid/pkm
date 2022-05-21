---
aliases: 
tags: python 
date created: Saturday, May 21st 2022, 11:18:34 am
date modified: Saturday, May 21st 2022, 11:18:34 am
title: Python Enum
---

# Python Enum

When subclassing `Enum`, mix-in types must appear before `Enum` itself in the sequence of bases.

```python
class IntEnum(int, Enum):
	pass
```

[enum — Support for enumerations — Python 3.10.4 documentation](https://docs.python.org/3/library/enum.html)