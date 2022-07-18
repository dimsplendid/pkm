---
aliases: 
tags: INX todo
title: Contrast Ratio
date created: Wednesday, July 13th 2022, 2:28:51 pm
date modified: Wednesday, July 13th 2022, 2:28:57 pm
---

# Contrast Ratio

From the definition,

$$
CR = \frac{\int W(\lambda)d\lambda}{\int B(\lambda)d\lambda}
$$

First, the definition of $W(\lambda)$,
$$
W(\lambda) \propto LC\%(\lambda) = \frac{T_{detect}(\lambda)}{T_{bg}(\lambda)}
$$
And then, the definition of $B(\lambda)$, which is proportion to scatter index(SI)[^1],



and we can estimate the trend of refraction index from [[Cauchy's Equation]][^2]
$$
n(\lambda) = A + \frac{B}{\lambda^2} + \frac{C}{\lambda^4} + ...,
$$
$$
\begin{align*}
B(\lambda) \propto SI(\lambda) &= \frac{(n_e(\lambda)^2-n_o(\lambda)^2)^2}{(K_{11}+K_{22}+k_{33})/3} \times d_{cell} \\
&\sim \ \frac{d_{cell}}{K_{avg}}\times ((A_e+\frac{B_e}{\lambda^2})^2-(A_o+\frac{B_o}{\lambda^2})^2)^2
\end{align*}
$$

So the contrast ratio would be,
$$
\begin{align*}
CR &\propto \frac{\int_{vis}\frac{T_{detect}(\lambda)}{T_{bg}(\lambda)} d\lambda}{\int_{vis} \frac{(n_e(\lambda)^2-n_o(\lambda)^2)^2}{(K_{11}+K_{22}+k_{33})/3} \times d_{cell} d\lambda} \\
&= \frac{K_{avg}}{d_{cell}}\times\frac{\int_{vis}\frac{T_{detect}(\lambda)}{T_{bg}(\lambda)} d\lambda}{\int_{vis} (n_e(\lambda)^2-n_o(\lambda)^2)^2  d\lambda} \\
\end{align*}
$$

暗態和漏光有關，而漏光和 [[Scatter Index]] 相關

## Reference

[^1]:Utsumi, Yuka, Shintaro Takeda, Hiroyuki Kagawa, Daisuke Kajita, Ikuo Hiyama, Yasushi Tomioka, Toshiki Asakura, et al. “11.2: Improved Contrast Ratio in IPS-Pro LCD TV by Using Quantitative Analysis of Depolarized Light Leakage from Component Materials.” _SID Symposium Digest of Technical Papers_ 39, no. 1 (2008): 129. [https://doi.org/10.1889/1.3069379](https://doi.org/10.1889/1.3069379). [[1.3069379.pdf]]
[^2]: [Contrast ratio - Wikipedia](https://en.wikipedia.org/wiki/Contrast_ratio)
