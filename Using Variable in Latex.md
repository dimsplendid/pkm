---
aliases: 
tags: trivia latex
date created: Friday, April 29th 2022, 1:01:39 pm
date modified: Friday, April 29th 2022, 1:25:00 pm
title: Using Variable in Latex
---

# Using Variable in Latex

[Is there any way I can define a variable in LaTeX? - Stack Overflow](https://stackoverflow.com/questions/1211888/is-there-any-way-i-can-define-a-variable-in-latex)

Use `\newcommand`

e.g.

```latex
\documentclass{article}
\newcommand\x{30}
\begin{document}
\x
\end{document}
```

output:

```
30
```

