import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Drawer from './Drawer';

export const Default: StoryFn<typeof Drawer> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Drawer trigger={<Button>Drawer Trigger</Button>}>
        <div style={{ padding: 20 }}>
          <p>Drawer Content</p>
          <p>Drawer Content</p>
          <p>Drawer Content</p>
        </div>
      </Drawer>
    </div>
  );
};

export default {
  title: 'Components/UI/Drawer',
  component: Drawer,
  argTypes: {
    trigger: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta<typeof Drawer>;
