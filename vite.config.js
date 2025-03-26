import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  base: '',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@consts': path.resolve(__dirname, 'src/consts'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
