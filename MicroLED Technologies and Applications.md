---
aliases: 
tags: INX microLED 
title: 'MicroLED Technologies and Applications: Characteristics, Fabrication, Progress, and Challenges'
date created: Thursday, July 28th 2022, 1:20:06 pm
date modified: Friday, July 29th 2022, 4:07:58 pm
---

# MicroLED Technologies and Applications: Characteristics, Fabrication, Progress, and Challenges

The note of the review paper[^1]

## Introduction

### Background

**Category by Size:**

1. traditional broad-area LED: > 200 um
	1. Broad-area $AlInGaN$ ultraviolet, blue, green, white LED
	2. $AlInGaP$ red LED
	3. Usage: backlight, signal, outdoor displaying, curing, etc.
2. mini-LED: 100~200 um
	1. Usage: high-end displays, [[High Dynamic Range]] (HDR) display, flexible display
3. microLED: < 50 um
	1. $InGaN$
	2. Usage: all, including AR/VR

**Market:**

1. Apple also play an important character to push this tech.
2. Facebook Oculus VR
3. Sharp and Foxconn invested eLux
4. Google invested Glo AB
5. Intel invested Aledia

### Advantages and Disadvantages of MicroLED

![[Pasted image 20220728163824.png]]

MircroLED can have two orders of magnitude brighter than LCD (have polarizer, CF, etc.) and OLED (would burn out at 10000 nits in a few second). And this is also significant to [[Ambient Contrast Ratio]](ACR).

And microLED can reach very high PPI, ten times higher than OLED and LCD. The PPI of LCD is low due to its mechanism. And the nature of OLED materials makes it incompatible with conventional microfabrication processes.

Concerning reliability and environmental stability, $AlInGaN$ and $AlInGaP$ are grown at high temperatures. As a result, they are very stable at room temperature and can operate in a broader temperature range of −100 °C–120 °C. In the other hand, OLED need complex encapsulation process and increase the cost.

Due to the development of [[Visible Light Communication]](VLC) and the high [[electron mobility]], the response time is in order of nanosecond.

Although the initial movement of microLED is higher efficient compare to OLED and LCD, today's microLED are still power consumption due to the [[Sidewall Defect Effect]].

> [!Question]
> What's the definition of EQE?

### Application of MicroLED

![[Pasted image 20220728164914.png]]

Interestingly, the two most significant challenges in microLED application, namely EQE and mass transfer defects, can be far less difficult in HMD, HUD, and projector. The reason are:

1. High current density to get higher brightness, and this reduces the sidewall effect.
2. The panel is smaller and easier for mass transfer.

Based on the above reason, the product strategy is to develop high PPI applications. And low PPI can become the next generation.

> [!Note]
> I think this is what INX did, right?

Tiny microLEDs can be bonded to flexible or stretchable substrates to make special displays[^2]

![[Pasted image 20220729093003.png]]

EI-Alpaslan et al demonstrated the light field display.[^3]

![[Pasted image 20220729093524.png]]

Also, microLED can use to [[Visible Light Communication|VLC]].

### Challenges

1. [[#Mass Transfer]]
2. [[#Reduced EQE with a Shrunken Chip Size]]
3. [[#Structure and Process Design From a System Perspective]]
4. [[#Defects Management]]

#### Mass Transfer

1. pick-and-place -> large, low density displays
2. direct wafer-scale (monolithic integration) -> near-eye displays
	> To date they can only produce monochrome displays, need assemble with QD and CF

> [!Question]
> 上次好像有看到有在做一次做三個顏色的？

#### Reduced EQE with a Shrunken Chip Size

The EQE of blue 5-10 um microLED is usually $\le 20\%$. At such a level, microLED cannot achieve the critical promise of better efficencey than LCD and OLED.

Due to small chip dimensions and low applied current in large displays, microLED operation is impacted by severe sidewall effects related to defects such as dangling bonds, contaminations, or structural damages in which nonradiative carrier recombination dominates.

> [!Hint] Dictionary
> **contamination**
> *noun*
> 1. the action or state of making or being made impure by polluting or poisoning.
> 	"the risk of contamination by dangerous bacteria"

These defects mainly come from the mesa etch.

#### Structure and Process Design From a System Perspective

![[Pasted image 20220729140140.png]]

Some backend tech need suitable frontend tech. Need to design the process based on final product. e.g.

- VR: $InGaN$ RGB wafer on $Si$ substrates, vertical thin film chip, direct wafer-to-wafer transfer onto a CMOS backplane.

#### Defects Management

Current displays are almost defect-free. To reach the same level, the defect management should be designed from a system perspective.

1. The low-defect processes elect in each step of the long manufacturing chain.
2. New test methods develop in each key process, especially in wafer manufacturing. Such as high-speed contactless inspection.
3. Panel defect manage, such as repair.

#### How to Realize Red Emission

High-efficiency $InGaN$ blue LED with an EQE of 84.3% and $AlInGaP$ red LED with EQE of 55% have been demonstrated. But the efficiency of $AlInGaP$ drop very fast as pixel size shrink.

The lower carrier diffusion and larger surface recombination rate make the sidewall effect of $AlInGaP$ red microLED much severer than $InGaN$.

Both color also shift when temperature change, the $InGaN$ is a more stable one.

Another way is to convert blue to green and red. LED + QD

> [!Note]
> 看這一篇真的有種看技能樹的感覺，或許可以用類似的方式來說明？

## Epitaxial Growth for MicroLED



## 原理

## 顯示

1. PAM
2. PWM

## 問題

1. 光產率
2. 漏電流
3. Halo effect
4. Mass Transfer
5. Quantum dot 還是有漏光問題需要 CF

> [!Question]
> 1. Sidewall effect?
> 2. EQE? external quantum efficiency
> 3. PI 還需要嗎？
> 4.

## 電路

## 檢測

1. 外觀
2. 微觀 defect

## 形變

1. Flexible
2. Stretchable

## 和現有 LCD 的連結

1. T6 VR case PPI 要到 1400+

## 材料要如何下手

![[Pasted image 20220630152549.png]]

## Reference

[^1]: [[Zhenetal_MicroLEDtechnologiesandapplications_characteristicsfabricationprogressandchallenges_JournalofPhysD_ApplPhys_TopicalReview_2021.pdf|MicroLED technologies and applications: characteristics, fabrication, progress, and challenges]]

[^2]: [[science.1175690.pdf|Printed Assemblies of Inorganic Light-Emitting Diodes for Deformable and Semitransparent Displays]]

[^3]: [[12.2083436.pdf|Small Form Factor Full Parallax Tiled Light Field Display]]