module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>src/**/?(*.)(spec|test).{ts,tsx}'
  ]
};
