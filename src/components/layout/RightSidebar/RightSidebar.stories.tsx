import { type Meta, type StoryFn } from '@storybook/react';

import RightSidebar from './RightSidebar';

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

export const Default: StoryFn<typeof RightSidebar> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <RightSidebar>
        <Block title="Content" />
      </RightSidebar>
    </div>
  );
};

export default {
  title: 'Components/Layout/RightSidebar',
  component: RightSidebar,
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<typeof RightSidebar>;
