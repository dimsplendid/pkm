---
aliases: 
tags: INX/rdl INX/experiment INX/SOP 
title: TR2
date created: Friday, November 25th 2022, 1:01:29 pm
date modified: Friday, November 25th 2022, 3:50:25 pm
---

# TR2

## Objective

使用 test cell 驗証光學(VT, RT) 和 RA(U-Shape, VHR, LTS)


## SOP

所有的項目基本照以下模式，只是依不同目的有的較煩瑣。

1. [[TR2 準備物料|準備物料]]
2. 製作 Test Cell
3. 量測
4. 資料整理

## 項目

1. 光學
	1. [[TR2 VT Measurement|VT]]
	2. [[TR2 RT Measurement|RT]]
2. RA
	1. [[TR2 U-Shape|U-Shape]] (高(50°C/低溫)
	2. [[TR2 VHR|VHR]] (高(60°C)/低溫)
	3. [[TR2 LTS|LTS]]

## Appendix

1. Test Cell Design
	1. [[Test Cell 2211]]
	2. [[Test Cell 5905]]
	3. [[Pure ITO Test Cell]]
2. [[TR2 Optical Model Fitting]]
3. [[供應商量測機差]]

### TA5905AKRD

![[Pasted image 20221125131215.png]]

## 光學

在 TOC 分別量測 **色點, LCM% @ AOI-02**, **RT @ ART-R03**，並對 Vop, Cell Gap 做圖確認趨勢。

樣品需使用 **D7P7 R1.5** 的 Test Cell, 因此可用 5905 or 2211 同設計的片子。

### 5905 Test Cell 製作流程

1. 製作空 Cell
	1. 挑選 Cut：需確認 CD 值沒有異常 (同時要挑 CF: FA5905AKRD)
	2. 需使用 Ball Spacer ($\text{Cell Gap} \approx \text{Spacer} - 0.2$)
	3. PI 使用 SE-6414 做 rubbing 製程
	4. Seal 使用 K1M ，需留注入孔
	5. 使用 2211 切割 Recipe
	6. 做完放入氮氣櫃
2. LC 注入
	1. 註明前面空 Cell 的實驗單號 (RDXXXXXXXX)
	2. 註明條件、數量、壓合 Cell Gap 與容許值 (通常 ±0.15 um)
	3. 產出後需確認面內均勻 (日光燈下) 與阻抗(Data Line 與 Vcom 間需大於 $20 M\ohm$)

> [!Info]
> 維健家：
> 1. CD 值挑 ±0.1 um 內，樣品不夠再放寬
> 2. 光學量測樣品數在 CD 卡控的情況下，希望有 10 pcs
> 3. 不同條件光學比較對照所需 Cell Gap, CD 最接近的樣品數據，或附近數比的平均
> 4. 光學量測是否有受到 CD 變化的影響 > 沒有遇過這個問題
> 5. LTS 使用 5905 送測沒有遇到判定問題 (被 ball spacer 干擾)


> [!Warning]
> 5905 沒有 PS 光罩，必需使用 ball spacer

### 2211 Test Cell 製作流程

使用 ODF 製程

1. 挑選 Cut：需確認 CD 值沒有異常 (同時要挑 CF: FA2211ASRD)
2. PI 使用 5370-37G(RD) 做 rubbing 製程 (low pre-tilt PI)
3. Seal 使用 K1M
4. 使用含 PS CF，不需洒 ball spacer ($\text{Cell Gap} \approx \text{PSH} + 0.2$)
	1. BM: BK-8310SP
	2. OC: V-259PHA-116X2
	3. PS: SR521E
5. 使用 2211 切割 Recipe (TFT 側需內縮 0.5 mm **(TFT: 145; CF: 40)**)
6. 產出後需確認面內均勻 (日光燈下) 與阻抗

> [!Info]
> 賴博家：
> 1. CD 挑選線寬線距比例不要差太多
> 2. 光學量測樣品數量 ~8 pc
> 3. 光學量測是否有受到 CD 變化的影響 > 沒有遇過這個問題
> 4. 有量測 G2G(TOC 3F DMS), CR(暗態效率，需要再找賴博提需求)
> 5. RA 因光配仍是使用 Spin Coating
> 6. 可做 LTS

> [!TODO]
> 確認 CD 卡控多少較合適

## RA

### 2211 Test Cell 製作流程

### U-Shape

### VHR

## Appendix

### 名詞定義

1. 光罩簡稱
	1. D: Slit angle (e.g. `D7` = slit angle 7°, `D17` = slit angle 17°)
	2. P: Pitch 間距 (e.g. `P7` = pitch 7 um, `P4` = pitch 4 um)
	3. R: ITO 寬度和間距 (Slit) 之比 (e.g. P7R1.5 → (ITO_W, ITO_D) = (2.8, 4.2))
2. Pitch: ITO and Slit Period, simply mean ITO_W + ITO_D(slit)
3. DOM: data on mask
4. DOG: data on glass

### CD 量測順序

![[Pasted image 20221125145231.png]]

### 各段負責人 & 連繫電話

| 廠區 | 單位                | 姓名          | 電話                     |
| ---- | ------------------- | ------------- | ------------------------ |
| FAB1 | FAB1 FP             | 陳振鴻        | 5014-12205               |
| FAB1 | FAB1 委託跟線       | 葉惠玉        | 5014-44795 / 0963-160222 |
| FAB1 | FAB 1 TFT PC        | 蔡婕晴        | 5014-12073               |
| FAB1 | FAB 1 TFT thin film | 劉怡良        | 5014-12753 / 550-16139   |
| FAB1 | FAB 1 TFT 曝光      | 黃旭昌        | 5014-12718 / 550-12306   |
| FAB1 | FAB 1 CF PC         | 王漢聰        | 5014-12913               |
| FAB1 | FAB 1 CF 黃光       |               |                          |
| FAB1 | FAB 1 CF 薄膜       |               |                          |
| FAB1 | FAB 1 CF 檢測       | 陳柏瑋        |                          |
| RDL  | RDL PC              | 梁起華        | 5014-12225 / 550-15035   |
| RDL  | RDL PICO            |               | 5014-12255               |
| RDL  | RDL RUB             |               | 5014-12227               |
| RDL  | RDL PI              | 王彗珊        | 5014-12223               |
| RDL  | RDL ODF             | 潘錦榮        | 5014-12227 / 550-14966   |
| RDL  | RDL SB              | 洪揚閔        | 5014-12683               |
| RDL  | RDL ODFX            |               | 5014-12256               |
| RDL  | RDL Injection       | 洪揚閔        | 5014-12254               |
| TOC  | TOC 光學測量        | 謝函倩        | 5014-43672               |
| TOC  | TOC U-shape 測量    | 張涵誼/江淑如 | 5014-43672               |
| TOC  | 實驗室 -2           |               | 5014-44732               |
| TOC  | 實驗室 -3           |               | 5014-44829               |