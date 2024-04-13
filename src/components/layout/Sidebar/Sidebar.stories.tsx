import { type Meta, type StoryFn } from '@storybook/react';

import Sidebar from './Sidebar';

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

export const Default: StoryFn<typeof Sidebar> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Sidebar header={<Block title="Header" />}>
        <Block title="Content" />
      </Sidebar>
    </div>
  );
};

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;
