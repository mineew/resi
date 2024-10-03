import type { Meta, StoryFn } from '@storybook/react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import calculateFileGrowth from '@/utils/resi-files/calculateFileGrowth';
import smoothFiles from '@/utils/resi-files/smoothFiles';

import RESIFileGrowthChart from './RESIFileGrowthChart';

const files = getRandomArray(
  (idx) =>
    createRandomRESIFile(`File-${idx + 1}`, {
      color: '',
      strokeWidth: 1,
      contentsItemMin: 0,
      contentsItemMax: 200,
      contentsLength: 50000,
    }),
  100,
);

export const Default: StoryFn<typeof RESIFileGrowthChart> = () => {
  const smoothedFiles = smoothFiles(files);
  const growth = calculateFileGrowth(smoothedFiles);

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileGrowthChart growth={growth} />
    </div>
  );
};

export default {
  component: RESIFileGrowthChart,
  argTypes: {
    diffs: { table: { disable: true } },
  },
  title: 'Components/Service/RESI File Growth Chart/RESIFileGrowthChart',
} as Meta<typeof RESIFileGrowthChart>;
