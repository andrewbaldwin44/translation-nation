import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    name: 'translation-nation',
  },
  external: ['react', 'react-dom'],
  plugins: [
    external(),
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/__test__/**'],
    }),
    terser(),
  ],
};
