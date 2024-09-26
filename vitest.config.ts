import {
  coverageConfigDefaults,
  defineConfig,
  mergeConfig,
} from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts', './vitest.mocks.ts'],
      include: ['src/**/*.test.ts?(x)'],
      coverage: {
        enabled: true,
        reporter: ['html'],
        exclude: [
          '**/*.stories.tsx',
          'playwright.config.ts',
          'pwa-assets.config.ts',
          'vite.pwa.config.ts',
          'vite.storybook.config.ts',
          'dev-dist',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  }),
);
