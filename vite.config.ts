/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ssr: { noExternal: [@reduxjs/toolkits]},
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './src/entry-client.tsx',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      clean: true,
      exclude: [
        'src/model/**',
        'src/main.tsx',
        'src/helpers/**',
        'vite.config.ts',
        'src/vite-env.d.ts',
        'src/test/**',
        'dist',
      ],
    },
    watch: false,
  },
});
