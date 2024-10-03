import type { Meta, StoryFn } from '@storybook/react';

import RESIFileChartEmpty from './RESIFileChartEmpty';

export const Default: StoryFn<typeof RESIFileChartEmpty> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <RESIFileChartEmpty />
    </div>
  );
};

export const WithChildren: StoryFn<typeof RESIFileChartEmpty> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <RESIFileChartEmpty>
        <div>Additional Content</div>
      </RESIFileChartEmpty>
    </div>
  );
};

export default {
  component: RESIFileChartEmpty,
  argTypes: {
    children: { table: { disable: true } },
  },
  title: 'Components/Service/RESI File Chart/RESIFileChartEmpty',
} as Meta<typeof RESIFileChartEmpty>;
