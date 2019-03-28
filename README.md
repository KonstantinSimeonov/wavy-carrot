## Setup:

Node version: replicated with both `10.15.1` and `8.12.0`.

```typescript
// index.ts
export const add = (x: number, y: number): number => x + y;
```

```sh
npm i
node fuse.js
node -p "require('./dist/es6.js')"
```

This outputs an empty javascript object, but should output an object with a single export, something like `{ add: (x, y) => x + y }`.
