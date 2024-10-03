import type { Meta, StoryFn } from '@storybook/react';
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
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <AlertDialog
        title={title}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        dontShowAgain={dontShowAgain}
        trigger={<Button>Alert Dialog Trigger</Button>}
        onAction={onAction}
        onChangeDontShowAgain={setDontShowAgain}
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
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
        dontShowAgain={dontShowAgain}
        onAction={onAction}
        onOpenChange={setOpen}
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
    description: '',
    cancelLabel: '',
    actionLabel: '',
    onAction: fn(),
  },
  argTypes: {
    open: { table: { disable: true } },
    trigger: { table: { disable: true } },
    dontShowAgain: { table: { disable: true } },
    onAction: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    onChangeDontShowAgain: { table: { disable: true } },
  },
} as Meta<typeof AlertDialog>;
