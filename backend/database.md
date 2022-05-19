---
aliases: 
tags: sql database todo 
date created: Monday, April 25th 2022, 1:09:14 pm
date modified: Thursday, May 19th 2022, 10:24:25 am
title: Database
---

# Database
> [!Danger]
> Need Update!

ref: [Database Structure and Design Tutorial | Lucidchart](https://www.lucidchart.com/pages/database-diagram/database-design#discovery__top)

- A well-structed database:
  - Saves disk space by eliminating redundant data
    > 還沒做到。目前反而多存了許多 redundant
  - Maintains data accuracy and integrity
  - Provides access to the data in useful ways
- Designing an efficient, useful database is a matter of following the proper process:
  > 目前更像是一個大表而己
  - Requirements analysis, or identifying the purpose of your database
  - Organizing data into tables
  - Specifying primary keys and analyzing relationships
  - Normalizing to standardize the tables

> [!Note]
> There are other database models, this is about Relational Database Model.
> The tutorial in [express](https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/) using the MongoDB, a [[ODM]](object-document mapping)(on the other hand, we call sql [[ORM]], object-relation mapping) model. In my case, ORM is fine.


- CRUD
  1. Create
  2. Read
  3. Update
  4. Delete

> [!Note]
> The string in sqlite is using single quote like `'some text'`
