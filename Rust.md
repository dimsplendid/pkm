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
	x + y
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
>
> **prevalent**
> *adjective*
> - widespread in a particular area or at a particular time.
> 	"the social ills prevalent in society today"
> 
> **deliberate**
> *adjective*
> 1. done consiously an intentionally
> 	"a deliberate attempt to provoke confilict"
> 2. careful and unhurried
> 	"a conscientious an  de liberate worker"
> 
> *verb*
> - engage in long and carful consideration
> 	"she deliberated over the menu"

另外有個想法很有趣。預設的變數都是 immutable，想要改變要在一開始就寫下`mut`。仔細一想，要不斷變動一個變數的值確實比較少。而一但新功能突然修改了就能馬上報錯。雖然其它語言可以用 `const` 達到類似的效果。但是否預設對思考還是有差呢。

 但是 Rust 還是有 `const`，等等……。看來和 compile-evaluation 有關。用 `const` 宣告的**常數**在編譯時期就會確定值，而 `let` 則是在 run-time。

`const` 的命名習慣倒也和 Python 相同：`ALL_UPPERCASE`

也有 tuple 呢，and also support unpack variable, call *distructure*

```rust
let tup = (500, 6.4, 1);
let (x, y, z) = tup;
```

Have format string like python

```rust
let x = 2
println!("The value of x is {x}")
```

But can not calculate at the string, or is it?

```rust
println!("The value of x is {x+1}") // wrong
```

> [!Note]
> 這時候覺得 python 符號一致性真的利害。

## Statement vs. Expression

1. Statement do not return values.
2. Expression evaluate to value, and can be part of statement.
	> 某種程度和 lambda function 有點像唉
3. Expressions do not include ending semicolons
4. In functions, the last expressions is implici