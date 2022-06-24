---
aliases: 
tags: python, python/django, javascript, web
date created: Wednesday, April 27th 2022, 9:33:44 am
date modified: Thursday, April 28th 2022, 4:02:38 pm
title: Organizing Your Front-End Codebase in a Django Project
---

# Organizing Your Front-End Codebase in a Django Project

> [!Info]
> Part 1 of [[Modern JavaScript for Django]]

## The Two Common Approaches of Integrating Django and JavaScript

1. Server-First: 
	Easy to make a spaghetti monster. Hard to maintain and reuse code. Conflict the philosophy  DRY.
2. Client-First: 
	Determine the front-end framework first. And backend is a completely separate, standalone Django project where Django is mostly just an API into the database. But on the other hand, throw out Django's front-end goodies.(templates, forms, …)
3. Hybrid: choose the server-first and client-first at **page level**

> [!Info] Resources
> 1. [Organizing your Front-End Codebase in a Django Project (saaspegasus.com)](https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/client-server-architectures/)
> 2. [[Secrets of the JavaScript Ninja, 2nd Edition.pdf]]

> [!Warning] Warning: Stay Away From W3School
> One problem about JavaScript (and CSS) research on the web is that W3Schools will turn up at the top of search engine results. This is unfortunate, because much of the data there is outdated enough to be incorrect. Be smart and avoid this resource.
> We scan the results page for the Mozilla Developer Network (MDN) link, usually around the third position, and click on that one.
>  [[Two Scoops of Django 3.x by Daniel Audrey Feldroy (z-lib.org).pdf]]



