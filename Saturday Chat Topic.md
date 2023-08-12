---
aliases: 
tags: talk 
date created: Friday, May 6th 2022, 11:25:54 am
date modified: Saturday, May 21st 2022, 11:51:10 am
title: Saturday Talking Topic
---

# Saturday Talking Topic


1. Rust parallel 需要更正：
	1. standard library 有 tread 可使用
	```rust
	use std::thread;
	
	fn main() {
		let list = vec![1, 2, 3];
		println!("Before defining closure: {:?}", list);
	
		thread::spawn(move || println!("From thread: {:?}", list))
			.join()
			.unwrap();
	}
	```
	2. 3rd-part library 的工具(e.g. rayon)
	```rust
	use rayon::prelude::*;
	
	fn main() {
		let mut vec = vec![2, 4, 6, 8];
	
		assert!(!vec.par_iter().any(|n| (*n % 2) != 0));
		assert!(vec.par_iter().all(|n| (*n % 2) == 0));
		assert!(!vec.par_iter().any(|n| *n > 8 ));
		assert!(vec.par_iter().all(|n| *n <= 8 ));
	
		vec.push(9);
	
		assert!(vec.par_iter().any(|n| (*n % 2) != 0));
		assert!(!vec.par_iter().all(|n| (*n % 2) == 0));
		assert!(vec.par_iter().any(|n| *n > 8 ));
		assert!(!vec.par_iter().all(|n| *n <= 8 )); 
	}
	
	```

2. 覺得現在還在說去中心化有點過時了，不過我還是覺的這是有希望的技術，但決對不是現在 *中心化* 的去中心化XD

H1B

roblox typing game