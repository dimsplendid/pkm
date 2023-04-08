---
aliases: [Pandas Highligh]
tags: python 
title: Pandas Highligh
linter-yaml-title-alias: Pandas Highligh
date-created: Monday, February 27th 2023, 12:43:54 pm
date-modified: Monday, February 27th 2023, 12:44:06 pm
---

ref: [4.11. Style a DataFrame — Effective Python for Data Scientists (khuyentran1401.github.io)](https://khuyentran1401.github.io/Efficient_Python_tricks_and_tools_for_data_scientists/Chapter3/style_dataframe.html)

```python
import pandas as pd 

df = pd.DataFrame({"col1": [-5, -2, 1, 4], "col2": [2, 3, -1, 4]})

def highlight_number(row):
    return [
        "background-color: red; color: white"
        if cell <= 0
        else "background-color: green; color: white"
        for cell in row
    ]

df.style.apply(highlight_number)
```