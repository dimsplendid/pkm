---
aliases: 
tags: git
date created: Wednesday, May 11th 2022, 9:26:14 am
date modified: Wednesday, May 11th 2022, 10:03:10 am
title: How to Commit Message
---

# How to Commit Message

Always using `git commit -a`

本文參考[如何寫一個 Git Commit Message | louie_lu's blog](https://blog.louie.lu/2017/03/21/%E5%A6%82%E4%BD%95%E5%AF%AB%E4%B8%80%E5%80%8B-git-commit-message/#rules03)[^1]與其原文[^2]

## Objective

雖然 `git diff` 可以確實告訴我們什麼改變了，但 commit message 才可以正確的告訴我們**原因**。就算是自己開發，我們也是和過去、未來的自己協作。

> [!Quote]
> 重新了解一段程式碼更動的脈絡很浪費腦力。雖然這件事情沒辦法完全避免，但是我們可以盡量[降低](http://www.osnews.com/story/19266/WTFs_m)這件事情的複雜度。Commit messages 正可以做到這點，而我們可以從 commit message 看出一個開發者是不是一位好的合作對象。
> --- Peter Hutterer

有好的 commit message, `git log` 等指令就可發揮強大的作用。

```bash
$ git blame
$ git revert
$ git rebase
$ git log
$ git shortlog
```

而內心有了好的架構，看他人的 commit 和 pull request 也更加清楚。

## 方法

> [!info]
> 這裡說明專注在 individual commit message
> [[commit squashing|Commit squashing]] 未來再來查找資料理解

### 確立規則

如同語言語法，更加自由的 commit message 也應定義其撰寫規則，如 AngularJS[^3]。至少定義以下三件：
- 風格：Markup syntax, warp margins, grammar, capital conventions, symbols. 定義這些並越簡單越好。
- 內容：什麼資訊需要？什麼不用？
- Metadata: issue tracking IDs, pull request number 等如何參照

當然，程式語言的世界常有先例可尋。

### The seven rules of a great Git commit message

1. 用一行空白分隔標題與內容
2. 限制標題最多只有 50 字元
3. 標題開頭大寫
4. 標題不以句點結尾
5. 以祈使句撰寫標題
6. 內文每行最多 72 字元
7. 用內文解釋 What, Why and How

e.g.
```git*
Summarize changes in around 50 characters or less
 
More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.
 
Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.
 
Further paragraphs come after blank lines.
 
 - Bullet points are okay, too
 
 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here
 
If you use an issue tracker, put references to them at the bottom,
like this:
 
Resolves: #123
See also: #456, #789
```

在大多數的情況，看 Code 本身即知道改變了什麼，所以只需要專注在解釋原因與方法。

read more: Pro GIt [Git - Book (git-scm.com)](https://git-scm.com/book/en/v2)[^4]

## Ref

[^1]: [如何寫一個 Git Commit Message | louie_lu's blog](https://blog.louie.lu/2017/03/21/%E5%A6%82%E4%BD%95%E5%AF%AB%E4%B8%80%E5%80%8B-git-commit-message/#rules03)
[^2]: [How to Write a Git Commit Message (cbea.ms)](https://cbea.ms/git-commit/)
[^3]: [Git Commit Message Conventions - Google 文件](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)
[^4]: [Git - Book (git-scm.com)](https://git-scm.com/book/en/v2)