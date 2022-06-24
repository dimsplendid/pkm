---
aliases: 
tags: web html trivia 
date created: Tuesday, June 21st 2022, 2:31:54 pm
date modified: Tuesday, June 21st 2022, 2:31:54 pm
title: The Ruby Annotation Element
---

# The Ruby Annotation Element

The `<ruby>` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.

The term _ruby_ originated as [a unit of measurement used by typesetters](https://en.wikipedia.org/wiki/Agate_(typography)), representing the smallest size that text can be printed on newsprint while remaining legible.

```html
<ruby>
明日<rt>Ashita</rt>
</ruby>
```

would render:

<ruby>
明日<rt>Ashita</rt>
</ruby>

用這個方法就可以寫出振假名、注音、和寫作 OO 讀作 XX 了。

> [!Note]
> 由於 [[markdown]] 可和 HTML 完全相容（或者說標準就是轉成 HTML），所以這也可以用在 markdown 筆記，相當方便。

