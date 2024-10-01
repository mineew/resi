/**
 * @type {import("@storybook/react-vite").StorybookConfig}
 */
const config = {
  stories: ['../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-essentials'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.storybook.config.ts',
      },
    },
  },

  docs: {
    autodocs: 'tag',
  },

  core: {
    disableTelemetry: true,
  },
};

export default config;
