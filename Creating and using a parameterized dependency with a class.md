---
aliases: 
tags: fastapi python web 
date created: Thursday, May 26th 2022, 8:33:20 am
date modified: Thursday, May 26th 2022, 8:33:20 am
title: Creating and using a parameterized dependency with a class
---

# Creating and Using a Parameterized Dependency with a Class

Because all the arguments of the function are set by the dependency injection system, we can't add an argument to the function.

The solution is to create a class that will be used as a dependency!