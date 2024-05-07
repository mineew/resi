import { type Meta, type StoryFn } from '@storybook/react';

import RESIFileGrowthChartEmpty from './RESIFileGrowthChartEmpty';

export const Default: StoryFn<typeof RESIFileGrowthChartEmpty> = () => {
  return (
    <div style={{ height: '100vh' }}>
      <RESIFileGrowthChartEmpty />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File Growth Chart/RESIFileGrowthChartEmpty',
  component: RESIFileGrowthChartEmpty,
} as Meta<typeof RESIFileGrowthChartEmpty>;
