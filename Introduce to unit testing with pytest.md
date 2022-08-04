---
aliases: 
date created: Thursday, August 4th 2022, 9:12:28 pm
date modified: Thursday, August 4th 2022, 9:12:32 pm
tags: python/fastapi testing/unit-test testing/pytest
title: Introduce to Unit Testing with Pytest
---

# Introduce to Unit Testing with Pytest

Let's start with a simple function:

**`introduction.py`**

```python
def add(a: int, b: int) -> int:
	return a + b
```

First, the unit test:

**`introduction_unittest`**

```python
import unittest
from .introduction import add

class TestIntroduction(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1, 2), 3)
```

```bash
$ python -m unittest chapter9.introduction_unittest
```

And the pytest:

**`introduction_pytest.py`**

```python
from .introduction import add

def test_add():
    assert add(1, 2) == 3
```

`pytest` is much shorter and don't need to define the class, the only constraint to making it work is that the function name has to start with `test_`. And pytest using the built-in `assert` statement instead of specific methods, allowing us write it more naturally.

```bash
$ pytest chapter9/introduction_pytest.py
```

## Generating Tests with Parametrize

