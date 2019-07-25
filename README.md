# parcel-preact-typescript

[![Build Status](https://travis-ci.com/metonym/parcel-preact-typescript.svg?branch=master)](https://travis-ci.com/metonym/parcel-preact-typescript)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

> Simple setup using [Parcel](https://parceljs.org/), [Preact X](https://preactjs.com/) and [TypeScript](https://www.typescriptlang.org/)

[Building](#build) the app for production yields a tiny `4.4 kb` bundle (gzipped).

## Note

Preact X is still in beta release. This project's dependencies and documentation will be actively updated.

To use Preact 8, simply run `yarn add preact`.

## Quick Start

Clone the repository and install its dependencies.

### Start

Develop the app locally and visit `http://localhost:2134`.

```bash
yarn start
```

### Build

Build the app for production.

```bash
yarn build
```

### Test

Run the tests using the [jest](https://jestjs.io/) JavaScript testing framework.

```bash
yarn test
```

The jest configuration for this project is in `package.json`:

```json
"jest": {
  "preset": "ts-jest"
}
```

## Customizing `tsconfig.json`

The default [`tsconfig.json`](tsconfig.json) contains the following:

```json
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

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## License

[MIT](LICENSE)
