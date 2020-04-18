import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));

export default {
  input: './dist/index.js',

  output: {
    file: `./rollup/joltite-${version}.js`,
    name: 'joltite',
    preferConst: true,
  },

  onwarn() {},
};
