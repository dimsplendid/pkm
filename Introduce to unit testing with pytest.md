---
aliases: 
date created: Thursday, August 4th 2022, 9:12:28 pm
date modified: Sunday, August 7th 2022, 8:59:42 pm
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

As usual, we should test a set of test cases, but typing all of them seems cumbersome like:

```python
def test_add():
    assert add(1, 2) == 3
    assert add(2, 2) == 4
    assert add(3, 2) == 5
    assert add(4, 2) == 6
    assert add(10, 3) == 13
```

And for more complex testing, this could be worse.

To help with this specific task, `pytest` provides the `parametrize` marker. In `pytest`, a **marker** is a special decorator to pass metadata for testing.

```python
import pytest

from introduction import add

@pytest.mark.parametrize(
    "a, b, expected", 
    [
        (1, 2, 3),
        (2, 2, 4),
        (3, 2, 5),
        (4, 2, 6),
    ]
)
def test_add(a, b, expected):
    assert add(a, b) == expected
```

## Reusing Test Logic by Creating Fixtures

When testing a large application, tests tend to become quite repetitive: lots of them will share the same boilerplate code. This is where `fixture` come in.

```python
@pytest.fixture
def address():
    return Address(
        stree_address="123 Main Street",
        postal_code="12345",
        city="Anytown",
        country="USA",
    )
```

Once again, `pytest` makes it very straightforward: fixtures are *simple functions* decorated *with the fixture decorator*. And we can use the function name as parameter later such as:

```python
def test_address_country(address): # pytest would know this fixture!
    assert address.country == "USA"
```
