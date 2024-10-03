import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import type { Theme } from './Theme';
import ThemeButton from './ThemeButton';

export const Default: StoryFn<typeof ThemeButton> = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <div style={{ padding: 20 }}>
      <ThemeButton
        theme={theme}
        onToggleTheme={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/App Settings/ThemeButton',
  component: ThemeButton,
  argTypes: {
    theme: { table: { disable: true } },
    onToggleTheme: { table: { disable: true } },
  },
} as Meta<typeof ThemeButton>;
