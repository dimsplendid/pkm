---
aliases: 
date created: Monday, August 8th 2022, 9:06:39 pm
date modified: Monday, August 8th 2022, 9:06:40 pm
tags: python/django python/jupyter-lab todo 
title: Django Jupyter Set Up
---

# Django Jupyter Set Up

## Install Django extension

```bash
pip install django-extensions
```

> [!Note]
> Actually, with proper `cookiecutter` boilerplate, this package usually has installed, if not, we should modify the `requirement/local.txt` and install from file to keep the package in track.
> ```bash
> pip install -r requirement/local.txt
> ```

## Install App in `settings/local.py`

The package is a helpful tool for development only, it should not in the production usage. And that's why we also separate the setting.[^1]

**`local.py`**

```python
INSTALLED_APPS += ["django_extensions"]  # noqa: F405
SHELL_PLUS_PRINT_SQL = True
os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true" # only use in development 
```

## Customize Jupyter Notebook Options[^2]

**`local.py`**

```python
NOTEBOOK_ARGUMENTS = [
    '--ip', 'x.x.x.x',
    '--port', 'xx',
]
```

## Start Jupyter Notebook

After all of these, it's easy to start the notebook in the future!

```bash
python manage.py shell_pluss --lab
```

## Reference

[^1]: [[A Wedge of Django - Daniel Roy Greenfeld, Audrey Roy Greenfeld.pdf]]
[^2]: [django-extensions Ipython Notebook](https://django-extensions.readthedocs.io/en/latest/shell_plus.html#ipython-notebook)