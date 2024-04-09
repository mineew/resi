import { type Meta, type StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button/Button';

import Popover from './Popover';

export const Default: StoryFn<typeof Popover> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Popover trigger={<Button>Popover Trigger</Button>}>
        <div style={{ padding: 20 }}>Popover Content</div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/UI/Popover',
  component: Popover,
} as Meta<typeof Popover>;
