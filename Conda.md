---
aliases: 
tags: python
date created: Sunday, May 22nd 2022, 9:50:37 pm
date modified: Sunday, May 22nd 2022, 9:50:37 pm
title: Conda
---

# Conda

The simplest way to create [[python]] environment.

- Export environment:
```shell
conda env export > environment.yml
```

- Create environment:
```shell
# new
conda create -n env_name python=3.x
# from environment.yml
conda env create -f environment.yml
```

- Using `pip` only after conda

```shell
# export
pip freeze > requirements.txt
pip install -r requirements.txt
```