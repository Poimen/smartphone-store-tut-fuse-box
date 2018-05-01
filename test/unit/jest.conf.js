const path = require('path')
// import path from 'path';

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, '../../'),
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.*\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|ts|js|tsx)?$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/.fusebox'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}',
    '!src/**/*.d.ts',
    '!src/config.ts',
    '!src/app.ts',
    '!src/router/router.ts',
    '!**/node_modules/**'
  ],
};
