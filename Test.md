---
aliases: [Test]
tags: 
title: Test
linter-yaml-title-alias: Test
date-created: Monday, February 27th 2023, 4:07:27 am
date-modified: Monday, February 27th 2023, 4:07:41 am
---

對應關係是指 first quantization 和 second quantization 之間的等價轉換。一種常見的對應關係是用佔據數表示法來重寫 first quantization 的波函數。例如，如果我們有 N 個粒子在一個系統中，我們可以用它們的位置來定義一個波函數 $\psi(\mathbf{r}_1,\mathbf{r}_2,\dots,\mathbf{r}_N)$
。這種波函數是在希爾伯特空間中的一個向量。

但是，如果我們假設粒子是不可分辨的，並且它們只能佔據一些離散的能階，那麼我們可以用佔據數來描述它們的狀態。例如，如果第 i 個能階有 $n_i$ 個粒子，那麼我們可以寫出一個佔據數向量 $|n_1,n_2,\dots,n_i,\dots\rangle$。這種向量是在福克空間中的一個向量1。

兩種表示法之間有一種對應關係，就是用創建算符和湮滅算符來連接它們。創建算符 $a_i^\dagger$ 可以把第 i 個能階的佔據數增加一，而湮滅算符 $a_i$ 可以把第 i 個能階的佔據數減少一2。這些算符也可以作用在位置表示的波函數上，得到如下的公式：

$$ a_i^\dagger\psi(\mathbf{r}_1,\mathbf{r}_2,\dots,\mathbf{r}N) = \frac{1}{\sqrt{n_i+1}}\sum{j=1}{N+1}(-1){j+1}\phi_i(\mathbf{r}_j)\psi(\mathbf{r}_1,\dots,\hat{\mathbf{r}}j,\dots,\mathbf{r}{N+1}) $$

$$ a_i\psi(\mathbf{r}_1,\mathbf{r}_2,\dots,\mathbf{r}N) = \sqrt{n_i}\sum{j=1}{N}(-1){j}\phi_i^*(\mathbf{r}_j)\psi(\mathbf{r}_1,\dots,\hat{\mathbf{r}}j,\dots,\mathbf{r}{N}) $$

其中 $\phi_i(\mathbf{r})$ 是第 i 個能階對應的單粒子波函數，$\hat{\mathbf{r}}_j$ 表示忽略第 j 個位置參數。

$$
\begin{align}
\vec{G_1} &= \frac{\vec{A}+\vec{B}+\vec{C}}{3} \\
\vec{G_2} &= \frac{\vec{A}+\vec{D}+\vec{C}}{3} \\
\overline{G_1G_2} &= |\vec{G_1}-\vec{G_2}| \\
&= |\frac{\vec{B}-\vec{D}}{3}| = \frac{\overline{BD}}{3} \\
&= \frac{\sqrt{12^2+24^2-2\cdot12\cdot24\cos(2\pi/3)}}{3} \\
&= \frac{12\sqrt{7}}{3} = 4\sqrt{7}
\end{align}
$$
$$
\begin{align}
&f(k) = \frac{1}{6}(13+3k) \\
&\sum_{k=1}^n f(k) = \frac{1}{6}(13n+3\frac{n\cdot(n+1)}{2}) = \frac{1}{12}(3n^2+29n)\\
\Rightarrow&\begin{cases}
\frac{1}{12}(3n^2+29n) = 247\frac{1}{2}, \\
n > 0.
\end{cases}\\
&3n^2+29n-2970 = 0 \\
\Rightarrow &n = 27
\end{align}
$$
