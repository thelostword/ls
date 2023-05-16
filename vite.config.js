/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      formats: ['es', 'umd', 'iife'],
      name: '$ls',
      fileName: (format) => `ls.${format}.js`
    },
  },
  test: {
    environment: "happy-dom",
  }
});
