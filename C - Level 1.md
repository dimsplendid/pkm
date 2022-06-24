---
aliases: 
tags: c learn c/modern-c 
date created: Monday, May 2nd 2022, 10:25:24 am
date modified: Monday, May 2nd 2022, 6:02:50 pm
title: C - Level 1
---

# C - Level 1

prev: [[C - Level 0]]
> [!Hint] Dictionary
> **buckle up**
> _phrasal verb of buckle_
> fasten one's seat belt in a vehicle or aircraft
>
> **permissive**
> _adjective_
> allowing or characterized by great or excessive freedom of behavior

- Bind type modifiers and qualifiers to the left
	```C
	char* name;
	char const* const path_file;
	```
- Do not use continued declarations
- Use array notation for pointer parameters. We do so wherever these assume that the pointer can't bull.
	```c
	size_t strlen(char const string[static 1]);
	int main(int argc, char* argv[argc+1]);
	```
- Use function notation for function pointer parameters. Along the same lines, we do so whenever we know that a function pointer can't be null.
	```c
	int atexit(void handler(void));
	// compatible declaration
	int atexit(void (*handler)(void));
	```

## Everything is About Control

### Conditional Execution

> [!Hint] **TAKEAWAY 3.3**
> _Don't compare to 0,_ `false`_, or_ `true`.

### Iterations

### Multiple Selection

## Expressing Computations

