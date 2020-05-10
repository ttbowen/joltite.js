const path = require('path');
const fs = require('fs');
const UglifyJS = require('uglify-es');

const { version } = require('./package.json');

const rollupPath = path.resolve('rollup');

const input = fs.readFileSync(
  path.join(rollupPath, `joltite-${version}.js`),
  'utf8'
);

const { code: output } = UglifyJS.minify(input, {
  compress: {
    dead_code: true,
    global_defs: {
      DEBUG: false,
    },
  },
});

fs.writeFileSync(
  path.join(rollupPath, `joltite-${version}.min.js`),
  output,
  'utf8'
);
