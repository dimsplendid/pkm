---
aliases: 
tags: INX/test-cell, INX/rdl
date created: Monday, April 25th 2022, 1:18:38 pm
date modified: Monday, July 11th 2022, 1:24:45 pm
title: Test Cell
---

# Test Cell

> [!Warning] TODO
> 要把這些圖片轉謄為表格/文子

![[image (1).png]]

![[image (2).png]]

![[image (3).png]]

1. VHR 可用 2211(五宮格) 量測 > 但差異性不大
	> 還是用 TN type(九宮格) 來量測。

> [!Note]
> 但如果加上 OC/PS 製程，VHR 會有顯註的差異，且 IS 也會不同，之後，IS/VHR 統一用 2211 做並加上 OC/PS 製程

OC/PS 製程等 CR Lab 實驗，北廠統一由郭家綺安排。
玻璃切割要告知之後送往 CR Lab or LCD 前段

2. 2211/5905 良率 (ref: 1098-like)

| platform | 產出 | 可量測 | 良率 | TFT |
| -------- | ---- | ------ | ---- | ---------- |
| 5905 | 60 | 56 | 93% | TA5905AKRD |
| 2211 | 50 | 30 | 60% | TA2211CKRD |

> [!Info]
> 欣達做 PAUV 的 5905 良率也和我的 2211 差不多 (同樣也是 PAUV 製程)，可能進出 fab, q-time 甚至 PAUV 製程都有影響

> [!Info]
> RDL 目前中段好像有 PAUV
> 賴博架設的樣子，目前只能曝 10x10

## Test Cell 使用 PS 暗態依然無趨勢

**Rubbing**

![[image (4).png]]

![[image (5).png]]

膜厚不均的影響~信旭沒有要看光學，所以他提供的轉速會比較慢，之後就以欣達實驗的轉速為條件，大於 800 即可。

![[Pasted image 20220908140305.png]]

所謂的均勻是基板中心點跟四個角段差 < 0.2 um

## To Understand

1. ratio 1.5
2. ITO/Slit
3. delta angle
4. pitch: ITO/slit 週期, ITO + Slit = Pitch
5. DOM: data on mask
6. DOG: data on glass

## Ball 選擇

1. 通常以「階」為區間，一階為 0.25 um
2. 5905/2211: Seal 內: 面內: Target = N+2: N+1: N
3. 九宮格: Seal 內: 面內: Target = N+1: N+1: N
4. ball spacer 使用黏著型 (injection 和 ODF 皆是), eg 3 um: EX-003-AC6

## Seal

## LC

ODF 一次需要 20 g

### LC injection 

10 pc 九宮格：2 g
20 pc 九宮格：3 g (如果要追求 cell gap 較準確就分兩次各 2 g)

### 5905 驅動貼導電膠帶的方式

![[image (20).png]]

### 2211 VHR

![[IMG_1238.jpg]]

## Test Cell TR2 用量

| 項目            | 分裝量 | 瓶數 | 液晶量 | 備註     |
|---------------|-----|----|-----|--------|
| 光學            | 20  | 2  | 40  |        |
| Jar Test      | 20  | 1  | 20  |        |
| U-Shape       | 20  | 1  | 20  |        |
| Bulk LTS test | 3   | 10 | 30  |        |
| 成分分析          | 5   | 1  | 5   | 給史宗白送樣 |
| Total         |     |    | 115 |

| 分裝量 | 瓶數 | 液晶量 |
| ------ | ---- | ------ |
| 20     | 4    | 80     |
| 3      | 10   | 30     |
| 5      | 1    | 5      |
|        |      | 115    |

## 2211 曝光

氮氣箱：單放 20 pc/box, 背對背 40 pc/box

![[RD line, Fab5, Fab3, T2 PAPI 製程條件.20221102.xlsx]]![[框膠廠商 TR1 PI 生成條件.20221103.xlsx]]

