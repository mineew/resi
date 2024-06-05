import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import AlertDialog from './AlertDialog';

export const Default: StoryFn<typeof AlertDialog> = ({
  title,
  description,
  cancelLabel,
  actionLabel,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <AlertDialog
        trigger={<Button>Alert Dialog Trigger</Button>}
        title={title}
        description={description}
        cancelLabel={cancelLabel}
        actionLabel={actionLabel}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/AlertDialog',
  component: AlertDialog,
  argTypes: {
    trigger: { table: { disable: true } },
  },
  args: {
    title: '',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    cancelLabel: '',
    actionLabel: '',
  },
} as Meta<typeof AlertDialog>;
