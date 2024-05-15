import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
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

        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          if (/\.(woff2?|ttf)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },

        manualChunks: (id) => {
          if (id.includes('recharts')) {
            return 'recharts';
          }

          if (id.includes('katex')) {
            return 'katex';
          }

          if (id.includes('i18next')) {
            return 'i18next';
          }

          if (id.includes('node_modules')) {
            return 'vendors';
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

  plugins: [react(), legacy()],
});
