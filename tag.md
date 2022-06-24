---
aliases: 
tags: markdown obsidian
date created: Friday, June 24th 2022, 4:19:07 pm
date modified: Friday, June 24th 2022, 4:19:10 pm
title: Tag
---

# Tag

## Intro

在文件的分類上，我認為 tag 和 folder 是各有好處。folder 可以更好的階層管理，如製作軟體各檔案按適當的相依性放置；而 tag 可以讓文件擁有多重屬性，但不方便看到不同 tag 間的關系。分類時也可能忘了其它相關的 tag 而造成前後邏輯不一致。前者可以用 [[#Nested Tag]] 來改善，後者只能善用 auto complete 和確認目前的 tags 來確認。另外也應偶爾查看項目過少的 tag。

## Syntax

tag 是文件的屬性

## Nested Tag
使用 `/` 即可，非常直觀。

```yaml
tags: parent/childen
```

在 obsidian 裡，搜尋 parent 也會顯示 children，符合使用預期。