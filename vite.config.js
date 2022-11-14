/*
 * @Author: thelostword
 * @Date: 2022-11-11 14:51:58
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 11:56:50
 * @FilePath: \ls\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

/* eslint-disable */
import { defineConfig } from 'vite';
/* eslint-enable */

export default () => defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  
  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'umd', 'iife'],
      name: '$ls',
      fileName: (format) => `ls.${format}.js`
    },
    rollupOptions: {
      external: ['crypto-js'],
      output: {
        globals: {
          'crypto-js': '$cryptoJs'
        }
      }
    }
  },
});
