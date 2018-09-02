const preset = require('ts-jest').jestPreset;

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/__fixtures__/"
  ],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 90,
  //     "functions": 95,
  //     "lines": 95,
  //     "statements": 95
  //   }
  // },
  moduleDirectories: [
    "src",
    "node_modules"
  ],
  testMatch: [
    ...preset.testMatch,
    '**/?(*.)+(spec|integ|test).ts?(x)',
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
};
