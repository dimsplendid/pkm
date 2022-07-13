---
aliases: 
tags: rust, learn 
date created: Tuesday, June 7th 2022, 2:19:03 pm
date modified: Tuesday, June 7th 2022, 2:19:08 pm
title: Rust
---

# Rust

一個靜態、完整 error handling、easy read compile error info、有套件管理、可以自動生成 layout 與 documents。看看我又發現了什麼！

和 [[Python]] 同樣有 type hint(annotating) 與 type inference。而且寫法也很像。

```rust
fn add(x: u32, y: u32) -> u32 {
	return x + y
}
```


可以重復宣告變數。(Rust 稱之為 shadow)

> [!Hint] Dictionary
> **insatiable**
> _adjective_
> 1. (of an appetite or desire) impossible to satisfy
> 	"an insatiable hunger for success"
> 2. (of a person) having an insatiable appetite or desire for something, especially sex.
> 	"'You're insatiable!' She cried as she pushed him away"
> 
> **nudge**
> _verb_
> - prod (someone) gently with one's elbow in order to attract attention.
> 	"people were nudging each other and pointing at me"
> 
> _noun_
> - a light touch or push.
> 	"he gave her shoulder a nudge"

另外有個想法很有趣。預設的變數都是 immutable，想要改變要在一開始就寫下`mut`。仔細一想，要不斷變動一個變數的值確實比較少。而一但新功能突然修改了就能馬上報錯。雖然其它語言可以用 `const` 達到這個效果。但是否預設對思考還是有差呢。




