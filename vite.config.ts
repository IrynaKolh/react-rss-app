/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      clean: true,
      // exclude: [
      //   '/node_modules/',
      //   '/src/models/interfases.tsx ',
      //   'src/main.tsx',
      //   'vite.config.ts',
      //   'vite-env.d.ts ',
      //   'vite-env.d.ts',
      // ],
    },
    watch: false,
  },
});
