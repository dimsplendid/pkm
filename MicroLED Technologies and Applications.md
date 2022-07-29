---
aliases: 
tags: INX microLED 
title: 'MicroLED Technologies and Applications: Characteristics, Fabrication, Progress, and Challenges'
date created: Thursday, July 28th 2022, 1:20:06 pm
date modified: Thursday, July 28th 2022, 8:10:22 pm
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

EI-Alpaslan et al demonstrated the light field display[^3].

![[Pasted image 20220729093524.png]]

Also, microLED can use to [[Visible Light Communication|VLC]].

### Challenges

1. [[#Mass Transfer]]
2. Low Efficiency of a Tiny Chip
3. Systematic Design of Structures and Processes for each Component of the Display System

#### Mass Transfer

1. pick-and-place -> large, low density displays
2. direct wafer-scale (monolithic integration) -> near-eye displays


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