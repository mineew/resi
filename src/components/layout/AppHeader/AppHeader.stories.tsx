import { type Meta, type StoryFn } from '@storybook/react';

import AppHeader from './AppHeader';

function Block({ title }: { title: string }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 16,
        height: '100%',
        backgroundColor: 'var(--slate-3)',
        border: '2px dashed var(--slate-6)',
      }}
    >
      {title}
    </div>
  );
}

export const Default: StoryFn<typeof AppHeader> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <AppHeader>
        <Block title="Child 1" />
        <Block title="Child 2" />
      </AppHeader>
    </div>
  );
};

export default {
  title: 'Components/Layout/AppHeader',
  component: AppHeader,
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<typeof AppHeader>;
