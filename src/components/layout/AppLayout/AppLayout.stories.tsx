import { type Meta, type StoryFn } from '@storybook/react';

import AppLayout from './AppLayout';

function Block({ title }: { title: string }) {
  return (
    <div style={{ padding: 20, height: '100%' }}>
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
    </div>
  );
}

export const Default: StoryFn<typeof AppLayout> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <AppLayout
        left={<Block title="Left" />}
        header={<Block title="Header" />}
        body={<Block title="Body" />}
        right={<Block title="Right" />}
      />
    </div>
  );
};

export default {
  title: 'Components/Layout/AppLayout',
  component: AppLayout,
  argTypes: {
    left: { table: { disable: true } },
    header: { table: { disable: true } },
    body: { table: { disable: true } },
    right: { table: { disable: true } },
  },
} as Meta<typeof AppLayout>;
