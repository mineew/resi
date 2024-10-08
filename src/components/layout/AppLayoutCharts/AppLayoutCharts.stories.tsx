import type { Meta, StoryFn } from '@storybook/react';

import AppLayoutCharts from './AppLayoutCharts';

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

export const Default: StoryFn<typeof AppLayoutCharts> = () => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <AppLayoutCharts
        fileChart={<Block title="File Chart" />}
        filesInit={<Block title="Files Init" />}
        diffChart={<Block title="File Diff Chart" />}
        growthChart={<Block title="File Growth Chart" />}
      />
    </div>
  );
};

export default {
  component: AppLayoutCharts,
  title: 'Components/Layout/AppLayoutCharts',
  argTypes: {
    fileChart: { table: { disable: true } },
    filesInit: { table: { disable: true } },
    diffChart: { table: { disable: true } },
    growthChart: { table: { disable: true } },
  },
} as Meta<typeof AppLayoutCharts>;
