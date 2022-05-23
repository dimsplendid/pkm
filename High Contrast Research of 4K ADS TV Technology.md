---
aliases: 
tags: INX SID paper
date created: Monday, May 23rd 2022, 4:10:28 pm
date modified: Monday, May 23rd 2022, 4:47:31 pm
title: High Contrast Research of 4K ADS TV Technology
---

# High Contrast Research of 4K ADS TV Technology

## Intro

使用材料與製程來提升 ADS[^1] 對比。
- 低散射係數負型液晶
- 更厚的 PI
- 更寬的 BM

CR 的定義：
$$

CR = \frac{L255}{L0}

$$
一般增加增加 CR 的方式很明顯就是提升 L255 和降低 L0
- 提升 L255
	- 開口率
	- pixel pitch 最佳化
	> 但一般的量產品沒法修改
	> 因此這篇論文以降低 L0 為主
- 降低 L0
	- n-LC
	- PI thickness
	- BM 寬度(BMCD[^2])
	- polarizer polarization

此四種條件的 DOE 如下：

![[Pasted image 20220523171014.png]]

CR 在全部的因素都修改後甚至可以提升至 3000。這篇論文也想探討個別因素的貢獻。

![[Pasted image 20220523171131.png]]
## LC & CG



## Some Keywords
[^1]: ADS(Advanced Super Dimension): BOE 的專利，廣視角(178°)，但對比只能到 1500。和 VA ~3000 相比沒有競爭力。
[^2]: CD: 曝光寬度，會因材料而有變

[[34-3 1.pdf]]