const { config, generateFromPackage } = require('../../scripts/generateRollupConfig');
const pkg = require('./package.json');

module.exports = {
  ...config,
  ...generateFromPackage(pkg),
};
