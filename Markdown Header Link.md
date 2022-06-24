---
aliases: 
tags: markdown obsidian
date created: Friday, June 24th 2022, 11:42:21 am
date modified: Friday, June 24th 2022, 11:42:21 am
title: Markdown Header Link
---

# Markdown Header Link

使用連結語法即可，這部份也做的符合 html 設計

```markdown
[name](#header-name)
```

這個不同平台實作有此差異的樣子

hackmd 使用 `-` 取代空格
而 obsidian 就需要用空白字元 `%20` 了

[This would go to Test Header](#Test%20Header), you need `%20` for space.

不過這個和連結一樣在 obsidian 也可使用簡化語法，看起來更簡潔
> [!Note]
> 同樣寫在 [[Obsidian#Internal link]]

```markdown
[[#header name]]
```

[[#Test Header]]





































## Test Header