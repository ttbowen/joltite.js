import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: `./dist/joltite.js`,
    name: 'joltite',
    format: 'iife',
    preferConst: true,
  },
  plugins: [typescript({ rootDir: 'src' })],
};
