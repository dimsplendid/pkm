---
aliases: 
tags: git
date created: Wednesday, May 11th 2022, 9:14:44 am
date modified: Tuesday, April 26th 2022, 2:16:18 pm
title: Git
---

# Git

1. download code from repository

```bash
$ git pull
```

2. upload committed code to repository

```bash
$ git push
```

3. commit: save changing code to git, see more in [[How to commit message]]

```bash
$ git add new_files # or using `git add .`
$ git commit -a # Using a vi-like editor to write more information
```

4. Watch the commit log, and this is why we should put good commit messages

```bash
$ git log
# or
$ git log --oneline
```

5. class your tasks: main/new feature(topic)/hot fix/release branch.
> [!Note]
> 未來使用 [[GitHub flow]], 較為簡單且可以和 project, issues 做關聯，超屌XD


![[Git的分支操作模組.png]]

```bash

```

## Ref
[^1]: [連猴子都能懂的Git入門指南 | 貝格樂（Backlog）](https://backlog.com/git-tutorial/tw/)
