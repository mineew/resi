import { type Meta, type StoryFn } from '@storybook/react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import smoothFiles from '@/utils/stats/smoothFiles';

import RESIFileChartPanel from './RESIFileChartPanel';

const files = getRandomArray(
  (idx) =>
    createRandomRESIFile(`File-${idx + 1}`, {
      contentsLength: 50000,
      contentsItemMin: (idx + 1) * 50,
      contentsItemMax: (idx + 1) * 250,
      color: '',
      strokeWidth: 1,
    }),
  3,
);

export const Default: StoryFn<typeof RESIFileChartPanel> = ({
  onChangeSettings,
}) => {
  const chunkSize = 500;

  return (
    <div style={{ height: '100vh' }}>
      <RESIFileChartPanel
        files={smoothFiles(files, { chunkSize })}
        chartScale={chunkSize}
        onChangeSettings={onChangeSettings}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File Chart/RESIFileChartPanel',
  component: RESIFileChartPanel,
  argTypes: {
    files: { table: { disable: true } },
    chartScale: { table: { disable: true } },
    settings: { table: { disable: true } },
  },
} as Meta<typeof RESIFileChartPanel>;
