import { type Meta, type StoryFn } from '@storybook/react';

import { type RESIFile } from '@/store/types/RESIFile';
import getRandomInt from '@/utils/misc/getRandomInt';
import calculateFileDifferences from '@/utils/stats/calculateFileDifferences';
import smoothFiles from '@/utils/stats/smoothFiles';

import RESIFileDiffChartDialog from './RESIFileDiffChartDialog';

const files: RESIFile[] = new Array(100).fill(null).map((_, i) => ({
  name: `File-${i + 1}`,
  color: '#000000',
  strokeWidth: 1,
  checked: true,
  contents: new Array(50000).fill(null).map(() => getRandomInt(0, 200)),
}));

export const Default: StoryFn<typeof RESIFileDiffChartDialog> = () => {
  const chunkSize = 500;
  const smoothedFiles = smoothFiles(files, { chunkSize });
  const diffs = calculateFileDifferences(smoothedFiles, { chunkSize });

  return (
    <div style={{ padding: 20, width: 300 }}>
      <RESIFileDiffChartDialog diffs={diffs} />
    </div>
  );
};

export default {
  title: 'Components/Service/RESIFileDiffChartDialog',
  component: RESIFileDiffChartDialog,
  argTypes: {
    diffs: { table: { disable: true } },
  },
} as Meta<typeof RESIFileDiffChartDialog>;
