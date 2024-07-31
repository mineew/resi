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
      include: ['src/**/*.test.ts?(x)'],
      coverage: {
        enabled: true,
        reporter: ['html'],
        exclude: ['**/*.stories.tsx', ...coverageConfigDefaults.exclude],
      },
    },
  }),
);
