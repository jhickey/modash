# Modash
Lodash virtual methods that work with immutablejs

## Install
`npm install --save modash`

Depends on [lodash](https://lodash.com/) and [immutable-js](https://facebook.github.io/immutable-js/)

## Usage

Use with the `::` operator to call lodash functions as virtual methods

```javascript
import {omit, zip, last} from 'modash';
import {fromJS} from 'immutable';

const obj = {a: 1, b: 2, c: 3};

obj::omit('a'); // {b: 2, c: 3}

//chainable!

const arr = ['a', 'b', 'c'];

arr
	::zip([1,2,3])
	::last(); // ['c', 3]

//works with immutables

const imm = fromJS({a: 1, b: 2, c: 3});

const imm2 = imm::omit('a');
imm2.has('a'); //false

//without `::`

const obj = {a: 1, b: 2, c: 3};

omit.call(obj, 'a'); // {b: 2, c: 3}


```

##Should I use this?

Eh, probably not: 

- The bind operator (`::`), while [supported in babel](https://babeljs.io/docs/plugins/transform-function-bind/), seems unlikely to actually ever become part of the spec. See [this discussion](https://github.com/tc39/proposal-bind-operator/issues/24) for more info.
- This relies on [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), which is super cool, but not supported in older browsers (notably, _no_ versions of Internet Explorer) and not able to be reliably polyfilled.
