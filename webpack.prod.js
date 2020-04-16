const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const version = require('./package.json').version;

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `joltite-${version}.min.js`,
    library: 'Joltite',
    libraryTarget: 'umd',
  },
});
