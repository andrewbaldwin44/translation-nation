import reactSwcPlugin from '@vitejs/plugin-react-swc';
import { LibraryFormats, UserConfig, defineConfig } from 'vite';
import checkerPlugin from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((config: UserConfig) => ({
  plugins: [
    reactSwcPlugin(),
    tsconfigPaths(),
    dts({
      outDir: './dist/types',
      //   exclude: ['**/*.test.ts', '**/*.test.tsx', '**/test', '**/tests'],
    }),
    config.mode !== 'test' &&
      checkerPlugin({
        typescript: true,
        eslint: {
          lintCommand: 'eslint ./src/**/*.{ts,tsx}',
        },
      }),
  ],
  build: {
    minify: true,
    lib: {
      entry: './src/index.ts',
      fileName: () => 'index.js',
      formats: ['es'] as LibraryFormats[],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
}));
