---
aliases: 
date created: Thursday, June 23rd 2022, 5:48:24 pm
date modified: Sunday, July 17th 2022, 3:05:17 pm
tags: INX/toolkits  python
title: TD Toolkits
---

# TD Toolkits

## Install

> [!Hint]
> Recommend using `conda`

> [!Note]
> I would try to pack to docker img later

```bash
$ conda create python=3.8 -n td_toolkits_v3
$ conda activate td_toolkits_v3
$ pip install -r requirements/local.txt # for devlopement
```

## Start up

1. CMD 移動到 td_toolkits_v3 資料夾
2. 開啟環境

```bash
$ conda activate td_toolkits_v3
```

3. run server: setting using `semi_prod.py`

```bash
$ python manage.py runserver [ip]:[port] --settings=config.settings.semi_prod
```

> 目前 IP: 10.56.216.45, port: 8001

## 改進

1. 應可以用類似基因演算法的方式來找 Tr 對應的 Vop
2. 