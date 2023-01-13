---
aliases: 
tags: INX/test-cell
title: Test Cell 2211
date created: Friday, November 25th 2022, 4:59:12 pm
date modified: Friday, November 25th 2022, 4:59:14 pm
---

# Test Cell 2211

依光罩可分為 TA2211ASRD, TA2211BSRD, TA2211CKRD(通稱 2211，差在面內設計不同), TA5905AKRD(通稱 5905)。可依需求可使用不同設計。

## 面內設計

### TA2211ASRD

![[Pasted image 20221125131507.png]]

### TA2211BSRD

![[Pasted image 20221125152445.png]]

### TA2211CKRD

![[Pasted image 20221125131424.png]]

## TR2 2211 數量估算

### 1. 純 RA

以 TA2211CKRD 來製做即可

VHR + U-Shape，一個條件 5 pc，良率以 33% 計，需做 15 pc。共 30 pc。
在 spin coating 大小限制下(8x10.13)，一 cut(305x375) ITO 可切 9 片，但有 pattern 的 TFT 由於切割的限制，僅能切出 6 片，可產出 Flicker Pattern(U-Shape 用) 16 chip, VHR pattern 8 chip(VHR 用) 

calculate function:
```python
from __future__ import annotations
from enum import Enum
from collections import defaultdict, Counter
from functools import reduce
from typing import NamedTuple
import pandas as pd

class Glass(Enum):
    T_2211_RA = 'TA2211CKRD'
    T_2211_MIX = 'TA2211ASRD'
    C_2211 = 'FA2211ASRD'
    T_5905 = 'TA5905AKRD'
    ITO = 'ITO'
    
class TestItem(Enum):
    USHAPE = 'U-Shape'
    VHR = 'VHR'
    LTS = 'LTS'
    OPT = 'OPT'
    
def create_required_cells (
    condition_num: int,
    extra_required: dict[str, dict[TestItem, int]] | None = None,
) -> dict[str, dict[TestItem, int]]:
    """
    Parameters
    ==========
    condition_num: int
        The number of conditions
    extra_required: dict[str, dict[TestItem, int]]
        The format is:
        {
            'condition name': {
                TestItem.VHR: ...,
                TestItem.OPT: ...,
            },
            ...
        }
    Return
    ======
        dict[str, dict[TestItem, int]]
        {
            'condition name': {
                TestItem.VHR: ...,
            },
            ...
        }
    """
    required_cells = {}
    for i in range(condition_num):
        required_cells[f'condition {i}'] = {
            TestItem.OPT: 20, # ±0.1 um 5 pc, typical 10 pc
            TestItem.VHR: 5,
            TestItem.USHAPE: 10, # HT & RT
        }
    if extra_required is not None:
        required_cells = {**required_cells, **extra_required}
    return required_cells

def cal_required_cut(
    test_item: dict[TestItem, int],
    glass: Glass,
    yield_: float = 1.,
) -> int:
    """
    Parameters
    ==========
    test_item: dict[str, int]
        The format is:
        {
            TestItem.VHR: 5,
            ...
        }
    glass: Glass
        Type of glass

    Return
    ======
        Number of needed cut in integer.
    """
    total_cut = 0
    yield_multiplier = int(-(-1 // yield_))
    
    if glass == Glass.T_2211_RA:
        vhr_needed_cut = 0
        ushape_needed_cut = 0
        
        vhr_cell_per_cut = 8
        ushape_cell_per_cut = 16
        
        if (
            (vhr_needed_chip := test_item.get(TestItem.VHR)) is not None 
            and type(vhr_needed_chip) is int
        ):
            vhr_needed_cut = -(
                -vhr_needed_chip * yield_multiplier // vhr_cell_per_cut
            )
        if (
            (ushape_needed_chip := test_item.get(TestItem.USHAPE)) is not None 
            and type(ushape_needed_chip) is int
        ):
            ushape_needed_cut = -(
                -ushape_needed_chip * yield_multiplier // ushape_cell_per_cut
            )
        total_cut += (
            vhr_needed_cut
            if (vhr_needed_cut > ushape_needed_cut)
            else ushape_needed_cut
        )
    
    return total_cut

def get_required_cut(
    required_cells: dict[str, dict[TestItem, int]],
    glasses: set[Glass],
) -> pd.DataFrame:
    result_dict = defaultdict(list)
    yield_ = 1
    
    total_required = reduce(
        lambda x, y: x + y,
        map(Counter, [test_item for _, test_item in required_cells.items()])
    )
    
    for glass in glasses:
        if glass == Glass.T_2211_RA:
            yield_ = 0.7
            
        result_dict['Glass'].append(glass.value)
        result_dict['Count'].append(
            cal_required_cut(total_required, glass, yield_)
        )
        
    return pd.DataFrame(result_dict)
    
extra_required_cells = {
    'JNC Test w/o OC': {
        TestItem.VHR: 30,
    },
    'JNC Test w/ OC': {
        TestItem.VHR: 30,
    },
}
```

