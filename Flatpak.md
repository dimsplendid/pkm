---
aliases: 
date created: Monday, November 14th 2022, 10:22:44 pm
date modified: Monday, November 14th 2022, 10:22:54 pm
tags: linux make-life-fantasy 
title: Flatpak
---

# Flatpak

## Give the filesystem permission

```sh
sudo flatpak override <package identifier> --filesystem=<permission>
```

`package identifier` can use `flatpak list` to check, and the `--filesystem` option can refer to [flatpak - Filesystem access](https://docs.flatpak.org/en/latest/sandbox-permissions.html#filesystem-access)