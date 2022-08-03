---
aliases: 
tags: python
date created: Sunday, May 22nd 2022, 9:50:37 pm
date modified: Sunday, May 22nd 2022, 9:50:37 pm
title: Conda
---

# Conda

The simplest way to create [[Python]] environment.

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

- Update environment
```bash
$ conda env update --file environment.yml --prune
```
[python - How to update an existing Conda environment with a .yml file - Stack Overflow](https://stackoverflow.com/questions/42352841/how-to-update-an-existing-conda-environment-with-a-yml-file)

- Using `pip` only after conda

```shell
# export
pip freeze > requirements.txt
pip install -r requirements.txt
```