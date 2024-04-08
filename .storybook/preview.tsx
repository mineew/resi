import { type Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    actions: {
      argTypesRegex: '^on[A-Z].*',
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', right: '🌞' },
          { value: 'dark', title: 'Dark', right: '🌚' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;
