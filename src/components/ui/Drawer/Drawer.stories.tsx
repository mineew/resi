import type { Meta, StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Drawer from './Drawer';

export const Default: StoryFn<typeof Drawer> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Drawer
        title="Drawer Title"
        tooltip="Drawer Tooltip"
        trigger={<Button>Drawer Trigger</Button>}
      >
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
  component: Drawer,
  title: 'Components/UI/Drawer',
  argTypes: {
    title: { table: { disable: true } },
    trigger: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    overlayClassName: { table: { disable: true } },
    triggerClassName: { table: { disable: true } },
  },
} as Meta<typeof Drawer>;
