---
aliases: 
tags: python make-life-fantasy 
date created: Saturday, May 14th 2022, 8:51:49 pm
date modified: Saturday, May 14th 2022, 8:51:49 pm
title: Python Type Hint
---

# Python Type Hint

- Can use `mypy` to check

> [!Note]
> VS Code 的設定很簡單，裝好 `mypy` 後把設定打開就好
> ![[Pasted image 20220514211007.png]]

- `Union[str, None]` is the same with `Optional[str]` , but the latter one is simpler and more readable
> In python 3.10, we can use more intuitive syntax: `str | None`
- Type alias should be named using `CamelCase`, like classes.
- Function-like object can use `Callable[[Type], Type]`
- We should know the type we want in function, but for some dynamic or complicated case, it may hard to annotate it correctly. In the condition, we can use `Any` and `cast`.