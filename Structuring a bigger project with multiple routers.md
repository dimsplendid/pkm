---
aliases: 
tags: fastapi python web 
date created: Friday, May 20th 2022, 2:20:35 pm
date modified: Friday, May 20th 2022, 2:20:35 pm
title: Structuring a bigger project with multiple routers
---

# Structuring a Bigger Project with Multiple Routers

Separate functions into smaller "app", and using `APIRouter` for each task. Finally include the sub-routers by using `app.include_router()`

> Just like the Django app and the url wire up.

There are many layouts, I don't like the one mentioned in chapter 3 in the book[^1], so check more projects.

## Reference

[^1]: F. Voron, _Building Data Science Applications with FastAPI: Develop, Manage, and Deploy Efficient Machine Learning Applications with Python_ (2021).