const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const version = require('./package.json').version;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: `joltite-${version}.js`,
  },
});
