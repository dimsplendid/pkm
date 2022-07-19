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
\int W(\lambda) d\lambda \propto LC\% = \frac{\int T_{detect}(\lambda) d\lambda}{\int T_{bg}(\lambda)d\lambda}
$$
And then, the definition of $B(\lambda)$, which is mainly cause by leakage light and proportion to [[Scatter Index]](SI)[^1],

![[Pasted image 20220718145931.png]]

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

> [!Note]
> Two wavelength fitting is good enough
> ![[cauchy_eq_check.png]]

So the contrast ratio would be,
$$
\begin{align*}
CR &\propto \frac{\int_{vis}W(\lambda) d\lambda}{\int_{vis} \frac{(n_e(\lambda)^2-n_o(\lambda)^2)^2}{(K_{11}+K_{22}+k_{33})/3} \times d_{cell} d\lambda} \\
&= \frac{K_{avg}}{d_{cell}}\times\frac{LC\%}{\int_{vis} (n_e(\lambda)^2-n_o(\lambda)^2)^2  d\lambda} \\
\end{align*}
$$

## Reference

[^1]:Utsumi, Yuka, Shintaro Takeda, Hiroyuki Kagawa, Daisuke Kajita, Ikuo Hiyama, Yasushi Tomioka, Toshiki Asakura, et al. “11.2: Improved Contrast Ratio in IPS-Pro LCD TV by Using Quantitative Analysis of Depolarized Light Leakage from Component Materials.” _SID Symposium Digest of Technical Papers_ 39, no. 1 (2008): 129. [https://doi.org/10.1889/1.3069379](https://doi.org/10.1889/1.3069379). [[1.3069379.pdf]]
[^2]: [Cauchy's equation - Wikipedia](https://en.wikipedia.org/wiki/Cauchy%27s_equation)
