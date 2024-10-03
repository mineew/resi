import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { Settings } from 'lucide-react';

import Button from '@/components/ui/Button/Button';

import AppSettings from './AppSettings';

export const Default: StoryFn<typeof AppSettings> = ({ onChange }) => {
  return (
    <div style={{ padding: 20 }}>
      <AppSettings onChange={onChange}>
        <Button icon>
          <Settings />
        </Button>
      </AppSettings>
    </div>
  );
};

export default {
  component: AppSettings,
  args: {
    onChange: fn(),
  },
  title: 'Components/Service/App Settings/AppSettings',
  argTypes: {
    values: { table: { disable: true } },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} as Meta<typeof AppSettings>;
