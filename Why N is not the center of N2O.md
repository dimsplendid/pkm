---
aliases: 
tags: chemistry random-problem
date created: Saturday, April 30th 2022, 8:32:49 pm
date modified: Sunday, May 1st 2022, 6:34:50 pm
title: Why $\ce{N}$ is not the center of $\ce{N2O}$
---

# Why $\ce{N}$ is Not the Center of $\ce{N2O}$

首先，從實際的角度來看，並沒實質的化學鍵這種東西，這是方便我們想像與使用的簡易模型。所以鍵結只是比較靠近的原子我們把它連起來。其代表的是這兩個原子相互作用力比較大(位能最低)。
> 有人說越靠近 4A 或者電負度低為中心，很好奇是哪理的結論。或者課本這麼寫？比方說 $\ce{ClO2}$ 是 $\ce{Cl}$ 為中心，而 $\ce{Cl2O}$ 則是氧為中心。

那麼問題來了，$\ce{N2O}$ 三個原子擺在一起，怎麼擺位能最低呢？這個系統足夠簡單，只有 $\ce{N-N-O}$ 和 $\ce{N-O-N}$ 和**三角形**三種。

我們可以先來看看能量的比較

![[N2O_energy.png]]
> **Figure 1.** Relative energy diagram for the three isomers of the N2O based on the CCSD(T)/ANO calculations [^1]

可以看到 $\ce{N-N-O}$ 確時較低，這也是我們說這個結構會比較**穩定**的意思

> [!Info]
> 這是理論計算的結果，不過以這麼簡單的系統應是相當準確了。


當然，我們可以用一些簡化的模型來預測看看：共振結構

![[NNO_lewis_structure.png]]
> **Figure 2.** Resonance of N-N-O

![[NON_lewis_structure.png]]
> **Figure 3.** Resonance of N-O-N

可以看到，$\ce{N-N-O}$ 的共振結構氧帶負電而氮帶正電，$\ce{N-O-N}$ 則相反。從電負度的大小角度來說，$\ce{N-N-O}$ 應該是較穩定的。
> 僅畫出符合八隅體的電子組態。

> [!Info] Latex of these diagram
> [$\ce{N2O}$Lewis Structure](/reference/lewis_structure_n2o.tex)
>

## Reference

[^1]: Wang, Feng, and Richard D. Harcourt. “Electronic Structure Study of the N 2 O Isomers Using Post-Hartree−Fock and Density Functional Theory Calculations.” _The Journal of Physical Chemistry A_ 104, no. 6 (February 1, 2000): 1304–10. [https://doi.org/10.1021/jp9930088](https://doi.org/10.1021/jp9930088).