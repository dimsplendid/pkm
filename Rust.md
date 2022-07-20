---
aliases: 
date created: Tuesday, June 7th 2022, 2:19:03 pm
date modified: Wednesday, July 20th 2022, 11:16:32 pm
tags: rust, learn 
title: Rust
---

# Rust

一個靜態、完整 error handling、easy read compile error info、有套件管理、可以自動生成 layout 與 documents。看看我又發現了什麼！

## Type Annotating

和 [[Python]] 同樣有 type hint(annotating) 與 type inference。而且寫法也很像。

但 Rust 的 type annotation 要強製寫就是了。

```rust
fn add(x: u32, y: u32) -> u32 {
	x + y // Note: this is expression(without ;), would be return
}
```

## Variable

```rust
let x = 5;
let x = "Five";
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
> 	"a conscientious an de liberate worker"
>
> *verb*
> - engage in long and carful consideration
> 	"she deliberated over the menu"

另外有個想法很有趣。預設的變數都是 immutable，想要改變要在一開始就寫下 `mut`。仔細一想，要不斷變動一個變數的值確實比較少。而一但新功能突然修改了就能馬上報錯。雖然其它語言可以用 `const` 達到類似的效果。但是否預設對思考還是有差呢。

 但是 Rust 還是有 `const`，等等……。看來和 compile-evaluation 有關。用 `const` 宣告的**常數**在編譯時期就會確定值，而 `let` 則是在 run-time。

## Naming Convention

`const` 的命名習慣倒也和 Python 相同：`ALL_UPPERCASE`

function 和一般變數也是，使用 `snake_case`

## Data Type

Int, Float 等這些都有，而且用很清楚的 `i32`, `f64` 等標明長度。

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

And rust also has **tuple** just like python, and also support unpack variable, call *distructure*. But can't neglect the parentheses. The tuple can have multiple type, but the array can only have one type. This is pretty make sense and also fit the most usages in python!

> [!Note]
> 所以不能像 python 那樣如同魔法一般的寫成
> ```python
> x, y = y, x
> ```
> 但可以這樣，也不錯奇幻了（笑
> ```rust
> let (y, x) = (x, y);
> ```
> 且同樣也可以用 tuple 的方式 return 多個值。


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

`String` and `Char` is the same with C, using double quote and single quote separately. And the encoding is UTF-8.

## Statement Vs. Expression

1. Statement do not return values.
2. Expression evaluate to value, and can be part of statement.
	> 某種程度和 lambda function 有點像唉
3. Expressions do not include ending semicolons
4. In functions, the last expression are implicitly return.

## Control Flow

With expression, `if else` can also like ternary operator in C or `if [cond] else` assign in Python.

```rust
let condition = true;
let x = if condition { 3 } else { 5 } // The evaluate type should be the same
```

> [!Hint]
> Compare to C and Python
> **C**
> ```c
> bool condition = true; // should include <stdbool.h>
> int x = condition ? 3 : 5;
> ```
> **Python**
> ```python
> condition = True
> x = 3 if condition else 5
> ```

## Ownership

> [!Note]
> 書中以 String 來舉例。這還真是經典。不管是 C 或者多數語言。乃至於許多的攻擊手法，stack overflow or SQL injection，String 都是個破口。
```console
2 |     let s1 = String::from("hello");
  |         -- move occurs because `s1` has type `String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              -- value moved here
4 | 
5 |     println!("{}, world!", s1);
  |                            ^^ value borrowed here after move
```

The heap value like string would **move** the owner when assign or transfer to function. And **drop** as leaving the scope. Using this system, Rust can manage memory allocation and free very well. If we need to keep the ownership, need using `clone` method.

```rust
    let s1 = String::from("hello");
    let s2 = s1.clone();

    println!("s1 = {}, s2 = {}", s1, s2);
```

## References and Borrowing

If we don't want to take the ownership, we can use reference, just like a pointer, but guaranteed to point to a valid value.

