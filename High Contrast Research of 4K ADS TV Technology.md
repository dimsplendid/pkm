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

The well known relationship between scatter coefficients($S_{Cell}$) and $CR$:
$$
\begin{align*}
\frac{1}{CR} &\propto S_{Cell} \\
S_{Cell} &= \frac{d\cdot (\Delta n(n_e+n_o))^2}{K_{avg}}
\end{align*}
$$
And using the equation of transmittance($T$), which is
$$
T\propto\sin^2(2\psi)\cdot\sin^2(\frac{\Delta n d}{\lambda}\cdot\pi)
$$
To simulate the transmittance, and fitting with binomial function of $\Delta nd$, which is
$$
T = -108.82(\Delta nd)^2+76.159(\Delta nd)-7.8468
$$
> [!Note] Little Research
> Just using Taylor expansion
> $$
> \begin{align*}
> T &= K(-\frac{\pi^2}{\lambda^2}x^2+\frac{\pi^2}{\lambda}x-\frac{\pi^2}{4}+1)+O((x-\frac{\lambda}{2})^4)\\
> &\approx -155.80 (\Delta nd)^2 + 91.77 (\Delta nd) - 8.03
> \end{align*}
> $$
> ![[Pasted image 20220523223907.png]]
> The approximation and the model are both not quite fit the result the paper generate.
> The wavelength is set to 589 nm,
> And interestingly,  if I using 700 nm, the approx is almost the same.
> ![[Pasted image 20220523223846.png]]
> And the Taylor expansion approximation is
> $$
> T\approx -110.30 (\Delta nd)^2 + 77.22 (\Delta nd) - 8.03
> $$

## BMCD

ADS is plane electric field, which exists the dark field region at the edge of electrode.

![[Pasted image 20220523224630.png]]
This method is increase more CR at 8K than 4K(結果表是用 4K)
![[Pasted image 20220523224809.png]]

## PI Thick

Improve the anchoring force.

![[Pasted image 20220523225611.png]]

![[Pasted image 20220523225711.png]]

![[Pasted image 20220523230114.png]]

## POL P.E.
![[Pasted image 20220523230552.png]]

簡而言之，貼的準一點。


## Some Keywords
[^1]: ADS(Advanced Super Dimension): BOE 的專利，廣視角(178°)，但對比只能到 1500。和 VA ~3000 相比沒有競爭力。
[^2]: CD: 曝光寬度，會因材料而有變

[[34-3 1.pdf]]