---
aliases: 
tags: python 
date created: Monday, April 25th 2022, 1:09:14 pm
date modified: Monday, April 25th 2022, 1:09:14 pm
title: == 和 is 的差異
---

# == 和 is 的差異

今天(2021-07-31)才知道 [[Python]] `is`
和等於不同，是直接比較記憶體位置。然後有趣的點是`-5~256, None` 在 python 是用 assign 記憶體給變數。看來是為了加速運行。
對於數字還是一樣用 `==` ，不過如果要判定變數是不是` None` 的話，用`is None` 非常直觀且比較快呢。
