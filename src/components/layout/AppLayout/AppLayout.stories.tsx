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
      <AppLayout sidebar={<Block title="Sidebar" />}>
        <Block title="Content" />
      </AppLayout>
    </div>
  );
};

export default {
  title: 'Components/Layout/AppLayout',
  component: AppLayout,
} as Meta<typeof AppLayout>;
