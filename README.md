# parcel-preact-typescript

> Minimal template using [Parcel](https://parceljs.org/), [Preact](https://preactjs.com/), and [TypeScript](https://www.typescriptlang.org/).

This template provides the simplest possible set-up that combines Parcel, Preact, TypeScript, and Jest.

## Getting Started

Install the project dependencies.

```bash
yarn install
```

## Available Scripts

### `yarn start`

Runs the app in development mode. Visit [http://localhost:1234](http://localhost:1234).

### `yarn build`

Builds the project for production. The build directory is `dist`; types will be written to `dist/index.d.ts`. Customize the build directory in the `outDir` configuration option in the [tsconfig.json](tsconfig.json).

### `yarn test`

Runs tests using [Jest](https://jestjs.io/).

Configure Jest options in `package.json`.

```json
{
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "jsdom"
  }
}
```

## Customizing `tsconfig.json`

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

### Decorators

Enable decorators ([stage 2](https://github.com/tc39/proposal-decorators)) by setting `compilerOptions.experimentalDecorators` to `true`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## License

[MIT](LICENSE)
