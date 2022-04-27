---
aliases: 
tags: test cell, rdl, INX
date created: Monday, April 25th 2022, 1:18:38 pm
date modified: Wednesday, April 27th 2022, 10:09:14 am
title: Test Cell
---

# Test Cell

![[image (1).png]]
![[image (2).png]]

![[image (3).png]]

1. VHR 可用 2211(五宮格) 量測 > 但差異性不大
	> 還是用 TN type(九宮格) 來量測。
2. 2211/5905 良率(ref: 1098-like)

| platform | 產出 | 可量測 | 良率 | TFT        |
| -------- | ---- | ------ | ---- | ---------- |
| 5905     | 60   | 56     | 93%  | TA5905AKRD |
| 2211     | 50   | 30     | 60%  | TA2211CKRD |

> [!Info]
> 欣達做 PAUV 的 5905 良率也和我的 2211 差不多(同樣也是 PAUV 製程)，可能進出 fab, q-time 甚至 PAUV 製程都有影響

## Test Cell 使用 PS 暗態依然無趨勢

**Rubbing**
![[image (4).png]]
![[image (5).png]]
膜厚不均的影響~信旭沒有要看光學，所以他提供的轉速會比較慢
所謂的均勻是基板中心點跟四個角段差<0.2um

## To Understand

1. ratio 1.5
2. ITO/Slit
3. delta angle
4. pitch: ITO/slit 週期, ITO + Slit = Pitch
5. DOM: data on mask
6. DOG: data on glass