module.exports = Object.assign(
  {},
  require('../../jest.config'),
  {
    "globals": {
      "ts-jest": {
        "tsConfigFile": "tsconfig.test.json"
      }
    },
  }
);
