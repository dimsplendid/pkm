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

> [!Note]
> 程式開發的排放，也稱之為[[layout]]。也算是各有各家，最近用 [[cookiecutter]] 模版真的是很愉快~之後用 Docker 更爽，環境都包了。

## Syntax

markdown 並沒有 tag 規範，但這是一個很方便的工具，因此各家有不同的實作方式，Obsidian 是用 `#tag_name`, 而 HackMD 則是 `###### tags: tag_name` 。

但 tag 是文件的屬性，應是如同檔名、資料夾位置等的 [[Meta Data]]；而近年來用於記錄 meta data 的格式中，或許 [[YAML]] 是最為熱門的，格式清楚且簡單，且除了 tag 還可以記錄其它任何想要的屬性。最重要的事 Obsidian, GitHub, HackMD 均有支援，相當不錯。

語法也一致，使用 2 行 `---` 在文件最上方隔開即可：

```markdown
---
tags: tag_name
---

# Title

contents

```

## Nested Tag
使用 `/` 即可，非常直觀。

```yaml
tags: parent/children
```

在 obsidian 裡，搜尋 parent 也會顯示 children，符合使用預期。