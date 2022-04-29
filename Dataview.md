---
aliases: 
tags: obsidian make-life-fantasy 
date created: Thursday, April 28th 2022, 10:25:40 pm
date modified: Thursday, April 28th 2022, 10:25:40 pm
title: Dataview
---
# Dataview
The interesting [[Obsidian Plugins Recommend|plugins of obsidian]].

## Basic Usage

### Annotation

Can use YAML or inline fields(Dataview-specific way to provide metadata using `key:: value`)
> I would using YAML, cause it's more general(can be use by other editors) and human readable for me

e.g.
```dataview
table 
	tags, 
	file.size as size, 
	file.ctime as created, 
	file.mtime as modified 
limit 5
```

> [!Bug]
> The meta data key have space can not correctly transfer to `kebab-case`



### Querying

1. Dataview Query Language(DQL)
```dataview
TABLE file.name AS "File", tags, date-created FROM #javascript 
```
2. Inline Expression
	We are on page `= this.file.name`.
	> Show the file name at preview.

3. DataviewJS
	A high-powered JS API which gives full access to the Dataview index and some convenient rendering utilities.
```javascript
dv.taskList(dv.pages().file.tasks.where(t => !t.completed))
```

4. inline JS Expression
	This page was last modified at `$= dv.current().file.mtime`. 


## Data Annotation

- metadata of notes.

> [!info]
> `=this`