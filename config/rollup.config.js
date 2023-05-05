const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
//const cssnano = require('cssnano');
//const postcssImport = require('postcss-import');
const del = require('rollup-plugin-delete');
const cleanup = require('rollup-plugin-cleanup');

const paths = require('./paths');

module.exports = {
  input: `${paths.src}`,
  output: {
    dir: paths.build,
    format: 'iife', //immediately-invoked function expression — suitable for <script> tags
    sourcemap: false,
    entryFileNames: 'variation.js'
  },
  plugins: [
    del({
      targets: `${paths.build}`,
      verbose: true
    }),
    resolve(),
    commonjs(), //converts  to ES modules
    postcss({
      extract: 'variation.css',
      plugins: [autoprefixer()]
    }),
    cleanup()
  ]
};
