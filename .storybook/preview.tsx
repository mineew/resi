import { type Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import '../src/i18n/i18n';
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
      name: 'Theme',
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

    locale: {
      name: 'Locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'ru', right: '🇷🇺', title: 'Русский' },
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

    (Story, context) => {
      const { i18n } = useTranslation();
      const locale = context.globals.locale;

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return <Story />;
    },
  ],
};

export default preview;
