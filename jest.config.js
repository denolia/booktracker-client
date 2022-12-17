/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: ['src/**/*'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
};
