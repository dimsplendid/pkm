---
aliases: [Generic Types, Traits, and Lifetimes]
tags: rust 
linter-yaml-title-alias: Generic Types, Traits, and Lifetimes
date-created: Thursday, July 27th 2023, 11:08:33 pm
date-modified: Thursday, July 27th 2023, 11:08:36 pm
---

> [!Note]
> Traits are similar to a feature often called _interfaces_ in other languages, although with some differences.


1. Generic types won't make your program run any slower than it would with concrete types. Cause it would *expand* as compile(called monomorphization)
2. 