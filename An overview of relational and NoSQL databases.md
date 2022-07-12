---
aliases: 
tags: python/fastapi web database 
date created: Friday, May 27th 2022, 9:00:35 am
date modified: Friday, May 27th 2022, 9:00:50 am
title: An Overview of Relational and NoSQL Databases
---

# An Overview of Relational and NoSQL Databases

## Relational databases

> [!Note]
> 目前為止，我基本上用 Django。而這個一定是搭配 Relational Database.
> 再加上 sqlite 真的過於方便 XD，雖然並不是最好的 production solution。但簡單的情況是非常夠用了。

In a nutshell, tables with the relationships.

![[relation database schema example.png]]

We can use **join query** to get all the relevant records base on the foreign keys. Relational databases are designed to perform such tasks efficiently; however,  those operations can become expensive if the schema is more complex. And even worse with some ORM's implementations: [[N+1 Problem]]

We should carefully design a relational schema and its query.

> [!Note]
> 雖然我現在追求先能用而已

## NoSQL databases

All database engines that are not relational fall back into the NoSQL category. But there are many kinds of them:

- key-value stores: Redis
- graph databases: Neo4j
- document-oriented database: MongoDB

Most of the time when we talk about "NoSQL databases", we are implicitly referring to document-oriented databases.

The documents are stored in **collections** and might no have all of the same attribute.

![[document-oriented schema example.png]]

To retrieve a post and all its comments, all data comes in one query.

> [!Hint] Dictionary
> **de facto**
> _adverb_
> - in fact, whether by right or not
> 
> _adjective_
> - existing or holding a specified position in fact but not necessarily by legal right

To summary,

- Relational database: good for structure data with a lot of relationships between entities. However, we should precisely define the schema and consider a migration system to update the schema.
- Document-oriented database: If data is highly variable or if the project is not mature enough.

For small and medium-sized applications, the choice doesn't really matter.
> 我目前的狀況(笑

In [[Python Asynchronous IO]] we mentioned that it was important to carefully select the libraries to perform I/O operation. Of course, databases are particularly important in this context!