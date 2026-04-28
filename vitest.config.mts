import path from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'src/styles')],
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/main')}";`,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
