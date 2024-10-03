import type { Meta, StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Popover from './Popover';

export const Default: StoryFn<typeof Popover> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Popover trigger={<Button>Popover Trigger</Button>}>
        <div style={{ padding: 20 }}>Popover Content</div>
      </Popover>
    </div>
  );
};

export default {
  component: Popover,
  title: 'Components/UI/Popover',
  argTypes: {
    open: { table: { disable: true } },
    trigger: { table: { disable: true } },
    children: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
} as Meta<typeof Popover>;
