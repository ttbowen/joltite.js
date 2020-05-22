const path = require('path');
const fs = require('fs');
const UglifyJS = require('uglify-es');
const rollupPath = path.resolve('dist');

const input = fs.readFileSync(path.join(rollupPath, `joltite.js`), 'utf8');

const { code: output } = UglifyJS.minify(input, {
  compress: {
    dead_code: true,
    global_defs: {
      DEBUG: false,
    },
  },
});

fs.writeFileSync(path.join(rollupPath, `joltite.min.js`), output, 'utf8');
