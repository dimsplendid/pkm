---
date updated: '2021-10-07T21:07:40+08:00'

---

# Object–relational impedance mismatch

## Intro

這又是一個，我在開發隠約發現，但早已有人詳細指出的問題：**物件與資料庫不匹配**。厡本我只是想，這應該是我單純不熟，所以才很難設計出好的資料庫(當然這仍是原因之一)。還有一點體驗在這兩者對於資料的詮釋本來就不同。且一般資料庫需要在一開始就有好的設計，但這一點反過來說就是極難擴充、修改；對於需要探索、測試等開發更是不有善。還有對接 [[database]] 機乎都是使用純字串溝通也會埋下許多隠患(Debug, 難以擴充、修改等)。

目前似乎有兩種方式可必免
1. ODBMS
2. [[ORM]]: 可以將物件式查詢轉換到 [[SQL]]，不僅少了前述字串的問題。且這種多了一層的結構，更是讓未來轉換底層的 database 毫無困難。

正在確認差異以及原因，和 [[Django]] 自帶 [[ORM]] 是否可算是解決此問題？
> 此 ORM 是否是我認知的？總覺得有些名詞已經混在一起……
> > 看起來應該是，我此前尋找 SQLite API 算是無意間符合……？
> > 雖然最近好像越來越多這種無意中走上好像正確的路。一方面應該是這是大家會遇到的問題。但另一方面我覺得這也是一種技術債……要小心。
> > 有些文章說要拋下原本 [[database|RDBMS]] 的方式純萃用 OO 來設計，不過我本來就不熟，或許還少了些知見障(笑

另外有提到 DDD(Domain Driven Design) 開發法……也來了解一下。
