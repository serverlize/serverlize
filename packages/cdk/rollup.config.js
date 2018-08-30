const rollup = require('../../rollup.config');
const pkg = require('./package.json');

module.exports = Object.assign({}, rollup.config, rollup.generateFromPackage(pkg));
