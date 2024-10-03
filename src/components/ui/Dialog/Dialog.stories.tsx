import type { Meta, StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';
import getRandomArray from '@/utils/misc/getRandomArray';

import Dialog from './Dialog';

export const Default: StoryFn<typeof Dialog> = ({ size, title }) => {
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

export const WithFooter: StoryFn<typeof Dialog> = ({ size, title }) => {
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

export const LongContent: StoryFn<typeof Dialog> = ({ size, title }) => {
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
  component: Dialog,
  title: 'Components/UI/Dialog',
  args: {
    size: '600',
    title: 'Dialog Title',
  },
  argTypes: {
    open: { table: { disable: true } },
    footer: { table: { disable: true } },
    trigger: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    children: { table: { disable: true } },
    scrollable: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
} as Meta<typeof Dialog>;
