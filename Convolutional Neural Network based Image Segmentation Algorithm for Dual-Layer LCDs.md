---
aliases: 
date created: Monday, November 14th 2022, 7:49:27 pm
date modified: Monday, November 14th 2022, 11:15:19 pm
tags: INX/paper 
title: Convolutional Neural Network Based Image Segmentation Algorithm for Dual-Layer LCDs
---

# Convolutional Neural Network Based Image Segmentation Algorithm for Dual-Layer LCDs

[[P-3.1 Convolutional Neural Network based Image Segmentation Algorithm for Dual-Layer LCDs.pdf]]

## Abstraction

Objective: improve the quality of dual cell

## Dual Cell

![[Pasted image 20221114231822.png]]
### Problems
![[Pasted image 20221114231904.png]]
### Quantity

#### Peak Signal-to-noise Ratio[^1]

$$
\begin{align*}
MSE &= \frac{1}{mn}\sum^{m-1, n-1}_{i,j=0}[I(i,j) -K(i,j)]^2 \\
PSNR &= 10 \log (\frac{MAX^2_I}{MSE}) \text{ dB}
\end{align*}
$$

### Previous Solution

1. fuzzy algorithms[^2]
2. viewpoint compensation-based image segmentation algorithms[^3]

## Convolution Network

### Improvement
| method                 | time(s) |
| ---------------------- | ------- |
| viewpoint compensation | ~300    |
| CNN                    | 1.183   | 
## Dataset

2730 images which cover a wide range of scenes

with 5 view angle: 0°, 15°, 30°, 45° and 64°

> [!TODO] 
> Simple Intro


## Conclusion

| method                 | time(s) |
| ---------------------- | ------- |
| viewpoint compensation | ~300    |
| CNN                    | 1.183   | 

## Reference

[^1]: [峰值訊噪比](https://zh.wikipedia.org/zh-tw/%E5%B3%B0%E5%80%BC%E4%BF%A1%E5%99%AA%E6%AF%94)

[^2]: [[Image_splitting_techniques_for_a_dual_layer_high_d.pdf]]

[^3]: [[基于视角补偿的双层液晶显示图像分割算法研究.pdf]]