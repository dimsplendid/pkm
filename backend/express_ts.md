---
date updated: '2021-08-23T17:23:37+08:00'

---

# [[express]] typescript

## basic

```typescript
import express from "express"
import {Request, Response, NextFunction} from 'express'
// middle layer
const calculate_summary = (
	req: Request, 
	res: Response, 
	next: NextFunction) => {
	// code...
}
```

## extend type

[Extending Express' Types with TypeScript Declaration Merging - TypeScript 4 - DEV Community](https://dev.to/chris927/extending-express-types-with-typescript-declaration-merging-typescript-4-3jh)
Sometimes we need passing parameters to next middleware. We can store them in req at js. But it would cause type error in ts. One way is to extend the request type:

```typescript
// adding needed attributes to Request
declare module "express-serve-static-core" {
	 interface Request {
	 	someNewAttribute ?: String // or other types
	 }
}
```
