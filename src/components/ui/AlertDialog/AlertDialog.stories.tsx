import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import AlertDialog from './AlertDialog';

export const Default: StoryFn<typeof AlertDialog> = ({
  title,
  onAction,
  description,
  cancelLabel,
  actionLabel,
}) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <AlertDialog
        title={title}
        onAction={onAction}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        dontShowAgain={dontShowAgain}
        onChangeDontShowAgain={setDontShowAgain}
        trigger={<Button>Alert Dialog Trigger</Button>}
      />
    </div>
  );
};

export const Controlled: StoryFn<typeof AlertDialog> = ({
  title,
  onAction,
  description,
  cancelLabel,
  actionLabel,
}) => {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

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
        title={title}
        onAction={onAction}
        onOpenChange={setOpen}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        dontShowAgain={dontShowAgain}
        onChangeDontShowAgain={setDontShowAgain}
      />
    </div>
  );
};

export default {
  component: AlertDialog,
  title: 'Components/UI/AlertDialog',
  args: {
    title: '',
    onAction: fn(),
    description: '',
    cancelLabel: '',
    actionLabel: '',
  },
  argTypes: {
    open: { table: { disable: true } },
    trigger: { table: { disable: true } },
    onAction: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    dontShowAgain: { table: { disable: true } },
    onChangeDontShowAgain: { table: { disable: true } },
  },
} as Meta<typeof AlertDialog>;
