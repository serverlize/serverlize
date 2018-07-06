module.exports = {
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"
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
  "testRegex": ".*\\.spec\\.(ts|tsx|js)$"
};
