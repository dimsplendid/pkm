# [[CLC]] 反射率量測
#INX 
![[image (1).png]]
ref: 秉均

Y value
$Y={\frac {K}{N}}\int _{\lambda }S(\lambda )\,I(\lambda )\,{\overline {y}}(\lambda )\,d\lambda$
Where
$N=\int _{\lambda }I(\lambda )\,{\overline {y}}(\lambda )\,d\lambda$
$\overline {y}$ is color match function of green
![[CIE_1931_XYZ_Color_Matching_Functions.svg]]
, can be approximated by Gaussians
$$
g(x;\alpha ,\mu ,\sigma _{1},\sigma _{2})=\alpha \exp \left({\frac {(x-\mu )^{2}}{-2\sigma ^{2}}}\right),{\text{ where }}\sigma ={\begin{cases}\sigma _{1},&x<\mu ,\\\sigma _{2},&x\geq \mu .\end{cases}}
$$
$$
\overline {y}(\lambda )=g(\lambda ;0.821,5688,469,405)+g(\lambda ;0.286,5309,163,311),
$$
We usually use xyY system:
$$
\begin{aligned}
{x}&={\frac {X}{X+Y+Z}},\\
{y}&={\frac {Y}{X+Y+Z}},\\
{z}&={\frac {Z}{X+Y+Z}}=1-x-y
\end{aligned}
$$
ref: https://en.wikipedia.org/wiki/CIE_1931_color_space