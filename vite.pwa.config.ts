import { VitePWA } from 'vite-plugin-pwa';

const pwa = VitePWA({
  registerType: 'autoUpdate',

  workbox: {
    globPatterns: ['**/*.{js,css,html,ttf,woff,woff2}'],
  },

  includeAssets: ['example-data/*'],

  devOptions: {
    enabled: true,
  },

  manifest: {
    name: 'RESI',
    short_name: 'RESI',
    description: 'App for processing resistograph files',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'icons/pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'icons/maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
});

export default pwa;
