import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';
import getRandomArray from '@/utils/misc/getRandomArray';

import Dialog from './Dialog';

export const Default: StoryFn<typeof Dialog> = ({ title, size }) => {
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        title={title}
        trigger={<Button>Dialog Trigger</Button>}
        size={size}
      >
        <div style={{ padding: 20 }}>
          <p>Dialog Content</p>
          <p>Dialog Content</p>
          <p>Dialog Content</p>
        </div>
      </Dialog>
    </div>
  );
};

export const WithFooter: StoryFn<typeof Dialog> = ({ title, size }) => {
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        title={title}
        trigger={<Button>Dialog Trigger</Button>}
        size={size}
        footer={<p>Dialog Footer</p>}
      >
        <div style={{ padding: 20 }}>
          <p>Dialog Content</p>
          <p>Dialog Content</p>
          <p>Dialog Content</p>
        </div>
      </Dialog>
    </div>
  );
};

export const LongContent: StoryFn<typeof Dialog> = ({ title, size }) => {
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        title={title}
        trigger={<Button>Dialog Trigger</Button>}
        size={size}
        footer={<p>Dialog Footer</p>}
        scrollable
      >
        <div style={{ padding: 20 }}>
          {getRandomArray(
            (i) => (
              <p key={`dialog-content-${i}`}>Dialog Content</p>
            ),
            100,
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default {
  title: 'Components/UI/Dialog',
  component: Dialog,
  argTypes: {
    trigger: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    children: { table: { disable: true } },
    footer: { table: { disable: true } },
    scrollable: { table: { disable: true } },
  },
  args: {
    title: 'Dialog Title',
    size: '600',
  },
} as Meta<typeof Dialog>;
