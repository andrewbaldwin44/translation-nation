import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import dts from 'rollup-plugin-dts';

export default [
  {
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
  },
  {
    input: './src/index.ts',
    output: {
      file: './dist/types/index.d.ts',
      format: 'es',
    },
    plugins: [
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve('./src'),
          },
        ],
      }),
      dts(),
    ],
  },
];
