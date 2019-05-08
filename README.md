# parcel-preact-typescript

[![Build Status](https://travis-ci.com/metonym/parcel-preact-typescript.svg?branch=master)](https://travis-ci.com/metonym/parcel-preact-typescript)

> Simple setup using [Parcel](https://parceljs.org/), [Preact X](https://preactjs.com/) and [TypeScript](https://www.typescriptlang.org/)

[Building](#build) the app for production yields a tiny 4.5kb bundle (gzipped).

## Quick Start

Clone the repository and install its dependencies.

### Start

```bash
yarn start
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
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

Support for decorators ([stage 2](https://github.com/tc39/proposal-decorators)) can be optionally enabled by adding the following:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## License

[MIT](LICENSE)
