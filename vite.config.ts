import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import pwa from './vite.pwa.config';

export default defineConfig({
  base: '/resi/app',

  build: {
    outDir: path.join(__dirname, 'dist', 'app'),
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',

        chunkFileNames: ({ facadeModuleId }) => {
          if (facadeModuleId?.includes('i18n/locales')) {
            return 'assets/locales/[name]-[hash].js';
          }

          return 'assets/js/[name]-[hash].js';
        },

        assetFileNames: ({ names = [] }) => {
          const name = names[0] || '';

          if (name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          if (/\.(woff2?|ttf)$/.test(name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },

        manualChunks: (id) => {
          if (id.includes('recharts')) {
            return 'vendors-recharts';
          }

          if (id.includes('katex')) {
            return 'vendors-katex';
          }

          if (id.includes('i18next') || id.includes('@radix')) {
            return 'vendors-main-2';
          }

          if (id.includes('node_modules')) {
            return 'vendors-main-1';
          }
        },
      },
    },
  },

  css: {
    devSourcemap: true,
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.'),
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [react(), legacy(), pwa],
});
