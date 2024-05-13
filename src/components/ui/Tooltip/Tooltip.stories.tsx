import { type Meta, type StoryFn } from '@storybook/react';

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
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  argTypes: {
    className: { table: { disable: true } },
    title: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta<typeof Tooltip>;
