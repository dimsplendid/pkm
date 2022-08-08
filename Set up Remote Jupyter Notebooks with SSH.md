---
aliases: 
date created: Sunday, July 17th 2022, 12:52:05 pm
date modified: Monday, August 8th 2022, 8:44:51 pm
tags: python/jupyter-lab ssh
title: Set up Remote Jupyter Notebooks with SSH
---

# Set up Remote Jupyter Notebooks with SSH

## 1. [[Set Up SSH Server]]

This is quite simple on Linux, but we need to do a little work on Windows. (But it's still trivial after Windows 10)

## 2. Start Jupyter Notebook at Server[^1]

```bash
jupyter lab --no-browser --port 8888
```

The `--no-browser` option would make the `jupyter lab` not open the browser. After all, we would connect the notebook on the client machine.

> [!Hint] Hint: How to set the parameter of Django Extensions (shell_plus)
> [[Django Jupyter Set Up#Customize Jupyter Notebook Options]]



## Reference

[^1]: [How To Run Remote Jupyter Notebooks with SSH on Windows 10](https://www.pugetsystems.com/labs/hpc/How-To-Run-Remote-Jupyter-Notebooks-with-SSH-on-Windows-10-1477/)