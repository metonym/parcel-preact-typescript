# parcel-preact-typescript

> Simple setup using [Parcel](https://parceljs.org/), [Preact X](https://preactjs.com/) and [TypeScript](https://www.typescriptlang.org/)

Building the app for production yields a tiny `4.7 kb` bundle (gzip).

## Quick Start

Clone the repository and install its dependencies.

```bash
git clone git@github.com:metonym/parcel-preact-typescript.git
cd parcel-preact-typescript
yarn install
```

#### Start

```bash
yarn start
```

#### Build

```bash
yarn build
```

#### Test

```bash
yarn test
```

## Customize `tsconfig.json`

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

Add decorator ([stage 2](https://github.com/tc39/proposal-decorators)) support:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## License

[MIT](LICENSE)
