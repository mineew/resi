import { type Meta, type StoryFn } from '@storybook/react';

import LeftSidebar from './LeftSidebar';

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

export const Default: StoryFn<typeof LeftSidebar> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <LeftSidebar
        header={<Block title="Header" />}
        body={<Block title="Content" />}
      />
    </div>
  );
};

export default {
  title: 'Components/Layout/LeftSidebar',
  component: LeftSidebar,
  argTypes: {
    header: { table: { disable: true } },
    body: { table: { disable: true } },
  },
} as Meta<typeof LeftSidebar>;
