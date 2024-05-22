import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'TranslationNation',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `translation-nation.${format}.js`,
    },
  },
});
