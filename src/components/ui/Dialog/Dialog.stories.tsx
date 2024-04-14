import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Dialog from './Dialog';

export const Default: StoryFn<typeof Dialog> = ({
  title,
  description,
  size,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        title={title}
        description={description}
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
  args: {
    title: 'Dialog Title',
    description: 'Dialog Description',
    size: '400',
  },
} as Meta<typeof Dialog>;
