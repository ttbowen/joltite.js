const { version } = require('./package.json');

export default {
  input: './dist/index.js',

  output: {
    file: `./rollup/joltite-${version}.js`,
    name: 'joltite',
    preferConst: true,
  },

  onwarn() {},
};
