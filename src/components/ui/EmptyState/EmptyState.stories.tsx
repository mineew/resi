import type { Meta, StoryFn } from '@storybook/react';
import { Inbox } from 'lucide-react';

import EmptyState from './EmptyState';

export const Default: StoryFn<typeof EmptyState> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <EmptyState icon={<Inbox />}>
        <p>Empty State Content</p>
        <p>Empty State Content</p>
        <p>Empty State Content</p>
      </EmptyState>
    </div>
  );
};

export default {
  title: 'Components/UI/EmptyState',
  component: EmptyState,
  argTypes: {
    icon: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta<typeof EmptyState>;
