# Number Enum

## Requirements

### For Use

* ECMAScript 2017

### For Development

* Node.js ≥ 9.0.0
* [Former Requirements](#for-use)

## Usage

* See also: [File `spec/index.spec.js`](./spec/index.spec.js)

### Create Enum Object

```javascript
const create = require('number-enum') // or: const {create} = require('number-enum')
create(['abc', 'def', 'ghi']) // should return {abc: 0, def: 1, ghi: 2}
create(['abc', 'def', 'ghi'], -2, -3) // should return {abc: -2, def: -5, ghi: -7}
```

### Create Enum Array

```javascript
const {generate} = require('number-enum')
const [abc, def, ghi] = generate() // [abc, def, ghi] should be [0, 1, 2]
const [foo, bar, hello, world] = generate(2, -3) // [foo, bar, hello, world] should be [2, -1, -4, -7]
```
