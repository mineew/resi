import { type Meta, type StoryFn } from '@storybook/react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import calculateFileDifferences from '@/utils/stats/calculateFileDifferences';
import smoothFiles from '@/utils/stats/smoothFiles';

import RESIFileDiffChart from './RESIFileDiffChart';

const files = getRandomArray(
  (idx) =>
    createRandomRESIFile(`File-${idx + 1}`, {
      contentsLength: 50000,
      contentsItemMin: 0,
      contentsItemMax: 200,
      color: '',
      strokeWidth: 1,
    }),
  100,
);

export const Default: StoryFn<typeof RESIFileDiffChart> = () => {
  const chunkSize = 500;
  const smoothedFiles = smoothFiles(files, { chunkSize });
  const diffs = calculateFileDifferences(smoothedFiles, { chunkSize });

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileDiffChart diffs={diffs} />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File Diff Chart/RESIFileDiffChart',
  component: RESIFileDiffChart,
  argTypes: {
    diffs: { table: { disable: true } },
  },
} as Meta<typeof RESIFileDiffChart>;
