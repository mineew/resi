import { type Meta, type StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import AlertDialog from './AlertDialog';

export const Default: StoryFn<typeof AlertDialog> = ({
  title,
  description,
  cancelLabel,
  actionLabel,
  onAction,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <AlertDialog
        trigger={<Button>Alert Dialog Trigger</Button>}
        title={title}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        onAction={onAction}
      />
    </div>
  );
};

export const Controlled: StoryFn<typeof AlertDialog> = ({
  title,
  description,
  cancelLabel,
  actionLabel,
  onAction,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Custom Button
      </Button>

      <AlertDialog
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        onAction={onAction}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/AlertDialog',
  component: AlertDialog,
  argTypes: {
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    trigger: { table: { disable: true } },
    onAction: { table: { disable: true } },
  },
  args: {
    title: '',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    cancelLabel: '',
    actionLabel: '',
    onAction: fn(),
  },
} as Meta<typeof AlertDialog>;
