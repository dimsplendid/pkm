---
aliases: 
tags: INX python
date created: Thursday, June 23rd 2022, 5:48:24 pm
date modified: Wednesday, June 29th 2022, 9:27:10 am
title: TD Toolkits
---

# TD Toolkits

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