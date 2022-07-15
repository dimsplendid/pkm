---
aliases: 
tags: trivia windows 
title: Pin Recycle Bin to TaskBar on Windows 11
date created: Friday, July 15th 2022, 3:22:31 pm
date modified: Friday, July 15th 2022, 3:22:52 pm
---

# Pin Recycle Bin to TaskBar on Windows 11

1. Create a shortcut, type the location
```
explorer.exe shell:RecycleBinFolder
```
2. Type your farvorate name for recycle bin
3. Change the icon in the `Properties`, `Shortcut` tab
![[Pasted image 20220715152558.png]]
![[Pasted image 20220715152608.png]]
4. Type the following path to look for proper recycle bin icons.
```
%SystemRoot%\system32\imageres.dll
```
![[Pasted image 20220715152716.png]]
6. **Show more options** and **Pin to taskbar**, then the origin shortcut can be delete.
![[Pasted image 20220715152826.png]]
![[Pasted image 20220715152834.png]]

## Reference

[How to Pin Recycle Bin to Taskbar on Windows 11 - All Things How](https://allthings.how/how-to-pin-recycle-bin-to-taskbar-on-windows-11/)