import { type Meta, type StoryFn } from '@storybook/react';

import AppLayoutDrawer from './AppLayoutDrawer';

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
  title: 'Components/Layout/AppLayoutDrawer',
  component: AppLayoutDrawer,
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<typeof AppLayoutDrawer>;
