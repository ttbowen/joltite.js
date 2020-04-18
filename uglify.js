import path from 'path';
import fs from 'fs';
import UglifyJS from 'uglify-es';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));

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
