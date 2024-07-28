import {
  coverageConfigDefaults,
  defaultExclude,
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
      exclude: ['e2e', ...defaultExclude],
      coverage: {
        enabled: true,
        reporter: ['html'],
        exclude: ['**/*.stories.tsx', ...coverageConfigDefaults.exclude],
      },
    },
  }),
);
