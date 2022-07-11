---
aliases: 
tags: python INX/experiment INX/toolkits
date created: Friday, April 29th 2022, 2:09:44 pm
date modified: Friday, April 29th 2022, 2:09:50 pm
title: LC Amount
---

# LC Amount Calculator

常理來說，液晶填到 cell 僅是一個簡單的長方體。而液晶的設定是重量，因此：
$$
\text{LC weight}(mg) = \text{Cell Volume}(cm^3) \times \text{LC density}(g/cm^3) \times 1000(mg/g)
$$
> [!Warning]
> 1. 不要拉 Excel, 難以檢查出錯，難以維護 function。
> 2. Excel 粗略測試 OK, 實際使用請把他寫成涵式，並加上註解。說明公式由來
> 3. 不要偷懶，善用維度分析(包含單位轉換！)
> 4. 確認 function 正常，未來就放到 Toolkits: 做成功，且只做一次

Cell 體積估算也很簡單，使用長方體公式即可

而若是更換液晶，有先前液晶的情況可以依照密度來換算，準確度會高很多。

$$
% define some long variables
\newcommand{\volume}{\text{Cell Volume}(cm^3)}
\newcommand{\lcdensity}{\text{ LC }\rho(g/cm^3) \times 1000(mg/g)}
\newcommand{\lcdrop}{\text{ LC 滴下量}(mg/drop)}
\newcommand{\lcpattern}{\text{\# of LC drop}}
\begin{align*}
    \volume &= \frac{\text{ref}\lcdrop \times \lcpattern}{\text{ref}\lcdensity}\\
    \text{target}\lcdrop &= \frac{\volume \times \text{target}\lcdensity}{\lcpattern}\\
    &= \frac{\text{ref}\lcdrop \times \lcpattern \times \text{target}\lcdensity}{\lcpattern \times \text{ref}\lcdensity}\\
    &= \frac{\text{ref}\lcdrop \times \text{target}\lcdensity}{\text{ref}\lcdensity}
\end{align*}
$$

> [!Note]
> Obsidian 會辨認 `#` 優先的樣子，在 latex 裡要打了話要改成 `\#` (而 mathjax 並不需要)

> [!Fail] 蠢事
> 把乘上密度寫成除上密度，又依數字隨意乘上 1000 做為單位換算。
