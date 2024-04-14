import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Dialog from './Dialog';

export const Default: StoryFn<typeof Dialog> = ({ title, size }) => {
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        title={title}
        trigger={<Button>Dialog Trigger</Button>}
        size={size}
      >
        <div>Dialog Content</div>
      </Dialog>
    </div>
  );
};

export default {
  title: 'Components/UI/Dialog',
  component: Dialog,
  argTypes: {
    trigger: { table: { disable: true } },
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    title: 'Dialog Title',
    size: '600',
  },
} as Meta<typeof Dialog>;
