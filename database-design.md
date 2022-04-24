---
date updated: '2021-08-15T19:46:37+08:00'

---

# [[database]] design

How to separate all data to separate tables?
```ad-note
If all in one table, when we want to insert one feature of specific entity, the other features should make a copy. And if we want to update data later, we should update all redudant data. It's not efficiency and seems sily(and it's what I done now.)
```
objective:

1. Keep data integrity
2. No update anomaly

from general to specific

- Conceptual
- Logical
- Physical

This can be continuem proccess

## Conceptual

Maybe some table depend on the other one.

## Logical

## Physical

The implement of DBMS.
server, how to get...
