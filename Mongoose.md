---
date updated: '2021-08-15T22:23:44+08:00'

---

# Mongoose

The frontend of [[MongoDB]]

## Connecting to MongoDB

```javascript=
// Import the monoose moduule
const mongoose = require('mongoose')

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	uusUnifiedTopolgy: true
})

// Get the default connection
const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on(
	'error', 
	console.error.bind(
		console,
		'MongoDB connection error:'
))
```

## Defining and creating models

```javascript=
// Require Mongoose
const mongoose = require('mongoose')

// Define a schema
const Schema = mongoose.Schema

let SomeModelSchema = new Schema({
	a_string: String,
	a_date: Date
})

// Compile model from schema
let SomeModel = mongoose.model('SomeModel', SomeModelSchema)
```
