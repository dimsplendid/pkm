---
aliases: 
tags: c
date created: Friday, April 29th 2022, 10:45:40 am
date modified: Friday, April 29th 2022, 4:36:36 pm
title: C
---

# C

I have read Learn C in the hard way, but it's not enough, I'm curious what's the modern C development?

1. Software package manager? There are `pip` in python, `npm` in JS, `gem` in Ruby, what about C?
	> [Welcome to Conan C/C++ Package Manager Documentation — conan 1.47.0 documentation](https://docs.conan.io/en/latest/)
2. What about virtual environment?

> [!Note]
> 1. C is not like python, most feature has backward compatibility. So the environment is more reliable, but I think we can always make a docker[^1]. Let me see later.

> [!Info]
> I would re-learn follow the book, [[Modern C (Jens Gustedt) (z-lib.org).pdf|Modern C]], in C17 standard.

3. What about deploy? I know it's simple to compile and execute, but how to solve environment and platform problem?
4. What's the best coding layout?
5. Review the naming conventions.
6. OO and design pattern implementation?
7. Build a full-stack web server using C
	> See how jserv do.

> [!Info]
> Try dataview to print the list from the [[C kanban|kanban]]?

> [!Hint] Dictionary
> acquaintance:  
> _noun_  
> 1. knowledge or experience of something
> 2. a person one knows slightly, but who is not a close friend  
> 
> cognition:  
> _noun_  
> - the mental action or process of acquiring knowledge and understanding through thought, experience, and the senses.

## Modern C

This book split the topic from level 0 to 3.

0. [[C - Level 0|Level 0]]
1. [[C - Level 1|Level 1]]
2. [[C - Level 2|Level 2]]
3. [[C - Level 3|Level 3]]

> [!Quote]  
> Jerve: 從第一手資料學習：大文豪寫作都不免要查字典，庸俗的軟體開發者如我們，難道不需要翻閱語言規格書嗎？難道不需要搞懂術語定義和規範嗎？[^2]

## Ref
[^1]:[skeeto/w64devkit: Portable C and C++ Development Kit for x64 (and x86) Windows (github.com)](https://github.com/skeeto/w64devkit)
[^2]:[你所不知道的 C 語言: 開發工具和規格標準 - HackMD](https://hackmd.io/@sysprog/c-standards#%E8%AE%80%E8%A6%8F%E6%A0%BC%E6%9B%B8%E5%8F%AF%E5%A4%A7%E5%B9%85%E7%9C%81%E5%8E%BB%E8%87%86%E6%B8%AC)