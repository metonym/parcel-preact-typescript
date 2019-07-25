# parcel-preact-typescript

[![Build Status](https://travis-ci.com/metonym/parcel-preact-typescript.svg?branch=master)](https://travis-ci.com/metonym/parcel-preact-typescript)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

> Simple setup using [Parcel](https://parceljs.org/), [Preact X](https://preactjs.com/) and [TypeScript](https://www.typescriptlang.org/)

This template provides the simplest possible set-up that combines Parcel, Preact X and TypeScript.

## Note

Preact X is still in beta release. This project's dependencies and documentation will be actively updated.

## Getting Started

Clone the repository and install its dependencies.

```bash
git clone git@github.com:metonym/parcel-preact-typescript.git
cd parcel-preact-typescript/
yarn install
```

## Start

Develop the app locally and visit `http://localhost:1234`.

```bash
yarn start
```

## Build

Build the app for production.

```bash
yarn build
```

## Test

Run the tests using the [jest](https://jestjs.io/) JavaScript testing framework.

```bash
yarn test
```

The jest configuration for this project is in `package.json`:

```js
"jest": {
  "preset": "ts-jest"
}
```

## Customize `tsconfig.json`

The default [`tsconfig.json`](tsconfig.json) contains the following:

```js
// tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react",
    "jsxFactory": "h",
    "lib": ["dom", "esnext"],
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "target": "es5"
  },
  "include": ["src"]
}
```

Note that `jsxFactory` must be `"h"` in order for preact to work with parcel.

Support for decorators ([stage 2](https://github.com/tc39/proposal-decorators)) can be enabled by adding the following:

```js
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## License

[MIT](LICENSE)
