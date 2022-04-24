# [[CLC]] 驅動
先 reset(40V, 實際約 37, 38 V), 再送入所需電壓
![[Pasted image 20210816090900.png]]
另外低溫下仍可以 reset, 因為 reset 電壓時間較長(100~200 ms), 而寫入只用 10 ms
> 換句話說通電時間和 RV curve 相關。
![[Pasted image 20210816091151.png]]

徐：應分為 test cell 和產品量測

## PID vs Minolta
- PID: 30°
- Minolta: 全角度(積分球)
之後想先用 Minolta 初篩，再用 PID