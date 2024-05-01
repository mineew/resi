import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import AppSettings from './AppSettings';

export const Default: StoryFn<typeof AppSettings> = ({ onChange }) => {
  return (
    <div style={{ padding: 20 }}>
      <AppSettings onChange={onChange}>
        <Button>AppSettings Trigger</Button>
      </AppSettings>
    </div>
  );
};

export default {
  title: 'Components/Service/App Settings/AppSettings',
  component: AppSettings,
  argTypes: {
    values: { table: { disable: true } },
    onChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta<typeof AppSettings>;
