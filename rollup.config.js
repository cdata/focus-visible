import uglify from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/focus-visible.js',
    output: {
      file: 'dist/focus-visible.js',
      format: 'umd'
    }
  },
  {
    input: 'src/custom-element-mixin.js',
    output: {
      file: 'dist/custom-element-mixin.js',
      format: 'umd',
      name: 'FocusVisiblePolyfillMixin'
    }
  },
  {
    input: 'src/focus-visible.js',
    output: {
      file: 'dist/focus-visible.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [uglify()]
  },
  {
    input: 'src/custom-element-mixin.js',
    output: {
      file: 'dist/custom-element-mixin.min.js',
      format: 'umd',
      name: 'FocusVisiblePolyfillMixin',
      sourcemap: true
    },
    plugins: [uglify()]
  }
];
