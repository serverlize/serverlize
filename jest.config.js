module.exports = {
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
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
  "moduleDirectories": [
    "src",
    "node_modules"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  "testRegex": ".*\\.(spec|integ)\\.(ts|tsx|js)$"
};
