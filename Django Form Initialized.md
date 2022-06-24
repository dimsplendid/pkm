---
tags: python, python/django, web
date created: Tuesday, April 26th 2022, 11:37:01 pm
date modified: Wednesday, April 27th 2022, 12:04:43 am
title: Django Form Initialized
---

# Django Form Initialized

[The Forms API | Django documentation | Django (djangoproject.com)](https://docs.djangoproject.com/en/4.0/ref/forms/api/#django.forms.Form.initial)

> [!Question]
> How to copy a data? (Using in profile copy.)

## Current Method
```python
# app.views

class ModelUpdateView(UpdateView):
	...

class ModelCopyView(ModelUpdateView):

	def get_object(self, queryset=None):
		obj = super().get_object(queryset)
		obj.pk = None
		obj.name = obj.name + '-copy'
		obj.slug = None
		return obj
```
> [!Missing]
> Can't copy many-to-many fields
> Cause many-to-many value can only store when object is saved.

## Modified







