import type { Meta, StoryFn } from '@storybook/react';

import AppLayoutDrawer from './AppLayoutDrawer';

function Block({ title }: { title: string }) {
  return (
    <div style={{ padding: 20, height: '100%' }}>
      <div
        style={{
          padding: 20,
          height: '100%',
          borderRadius: 16,
          backgroundColor: 'var(--slate-3)',
          border: '2px dashed var(--slate-6)',
        }}
      >
        {title}
      </div>
    </div>
  );
}

export const Default: StoryFn<typeof AppLayoutDrawer> = () => {
  return (
    <div>
      <AppLayoutDrawer>
        <Block title="Drawer Content" />
      </AppLayoutDrawer>
    </div>
  );
};

export default {
  component: AppLayoutDrawer,
  title: 'Components/Layout/AppLayoutDrawer',
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<typeof AppLayoutDrawer>;
