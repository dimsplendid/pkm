---
aliases:
  - INX Formula
tags:
  - INX
  - latex
title: INX Formula
linter-yaml-title-alias: INX Formula
date created: Thursday, November 2nd 2023, 1:53:10 pm
date modified: Thursday, November 2nd 2023, 1:53:19 pm
---
$$
\begin{align}
\Delta Eab* &= \sqrt {\Delta {a*}^2 + \Delta {b*}^2 + \Delta {L*}^2} \\
\Delta a* &= {a*}(d) - {a*}(d - 0.1) \\
\Delta b* &= {b*}(d) - {b*}(d - 0.1) \\
\Delta L* &= {L*}(d) - {L*}(d - 0.1) \\
\text{where}:\\d&: \text{Target Cell Gap}(\pu{\mu m})\\
\text{and}:\\
L* &= 116 f(\frac{Y}{Y_n}) - 16 \\
a* &= 500 f(\frac{X}{X_n}) - f(\frac{Y}{Y_n}) \\
b* &= 200 f(\frac{Y}{Y_n}) - f(\frac{Z}{Z_n}), \\
f(t) &= 
\begin{cases}
\sqrt[3]{t}&\text{, if } t > \delta^3\\
\frac{t}{3\delta^2}+\frac{4}{29}& \text{, otherwise}
\end{cases} \\
\delta &= \frac{6}{29},\\
\text{For }& \text{standard illuminant(D65):}\\
X_n &= 95.0489 \\
Y_n &= 100 \\
Z_n &= 108.8840 \\
\end{align}
$$