import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import viteConfig from './vite.config';

export default defineConfig({
  base: '/resi/storybook',

  resolve: {
    alias: viteConfig.resolve?.alias,
  },

  plugins: [react()],
});
