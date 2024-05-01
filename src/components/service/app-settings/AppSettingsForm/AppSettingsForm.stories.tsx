import { type Meta, type StoryFn } from '@storybook/react';

import AppSettingsForm from './AppSettingsForm';

export const Default: StoryFn<typeof AppSettingsForm> = ({ onSubmit }) => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <AppSettingsForm onSubmit={onSubmit} />
    </div>
  );
};

export default {
  title: 'Components/Service/App Settings/AppSettingsForm',
  component: AppSettingsForm,
  argTypes: {
    defaultValues: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
  },
} as Meta<typeof AppSettingsForm>;
