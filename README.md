# java-util-random
[![npm version](https://badge.fury.io/js/java-util-random.svg)](https://badge.fury.io/js/java-util-random)

A recreation of Java's java.util.Random class in Node.js.

Yes, I know there's already [java-random](https://npmjs.com/package/java-random), however the code is quite old, it doesn't fully support BigInts, and it doesn't have any typings. This library should be able to meet your needs. If you find any bugs, feel free report it on the [issue tracker](https://github.com/BluSpring/java-util-random/issues/new)!

## Importing the module
This module was written in TypeScript, so importing it in regular JavaScript is going to need a bit of an extra step.

JavaScript:
---
```js
const Random = require('java-util-random').default;
const random = new Random();
```
TypeScript
---
```ts
import Random from 'java-util-random';
const random = new Random();
```

## Known Issues
- .nextFloat() returns a value inaccurate to what Java returns.
  > ~~I'm not quite sure how to fix this issue, so if you know how, please feel free to PR.~~
  > The values of nextFloat() are now mostly accurate to Java floats, however there are occasionally fairly small precision issues.

- There are no streams.
  > I haven't bothered to try implementing them yet, however in the near future I might.