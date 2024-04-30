import { type Meta, type StoryFn } from '@storybook/react';

import RESIFileDiffChartEmpty from './RESIFileDiffChartEmpty';

export const Default: StoryFn<typeof RESIFileDiffChartEmpty> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <RESIFileDiffChartEmpty />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File Diff Chart/RESIFileDiffChartEmpty',
  component: RESIFileDiffChartEmpty,
} as Meta<typeof RESIFileDiffChartEmpty>;
