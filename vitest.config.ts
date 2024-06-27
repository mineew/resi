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
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        enabled: true,
        reporter: ['html'],
        exclude: [
          '**/*.stories.tsx',
          '**/*/types/*.ts',
          '**/*/misc/*.ts',
          '**/*/i18n/*.ts',
          '**/*/polyfills/*.ts',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  }),
);
