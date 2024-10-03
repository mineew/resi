import type { Meta, StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Tooltip from './Tooltip';

export const Default: StoryFn<typeof Tooltip> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Tooltip title="Tooltip Content">
        <Button>Tooltip Trigger</Button>
      </Tooltip>
    </div>
  );
};

export default {
  component: Tooltip,
  title: 'Components/UI/Tooltip',
  argTypes: {
    title: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as Meta<typeof Tooltip>;
