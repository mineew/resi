import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import RESIFileChartSettings from './RESIFileChartSettings';

export const Default: StoryFn<typeof RESIFileChartSettings> = ({
  onChange,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <RESIFileChartSettings onChange={onChange}>
        <Button>RESIFileChartSettings Trigger</Button>
      </RESIFileChartSettings>
    </div>
  );
};

export default {
  title: 'Components/UI/RESIFileChartSettings',
  component: RESIFileChartSettings,
  argTypes: {
    values: { table: { disable: true } },
    onChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta<typeof RESIFileChartSettings>;
