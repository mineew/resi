import type { Meta, StoryFn } from '@storybook/react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import calculateFileDifferences from '@/utils/resi-files/calculateFileDifferences';
import smoothFiles from '@/utils/resi-files/smoothFiles';

import RESIFileDiffChart from './RESIFileDiffChart';

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

export const Default: StoryFn<typeof RESIFileDiffChart> = () => {
  const smoothedFiles = smoothFiles(files);
  const diffs = calculateFileDifferences(smoothedFiles);

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileDiffChart diffs={diffs} />
    </div>
  );
};

export default {
  component: RESIFileDiffChart,
  argTypes: {
    diffs: { table: { disable: true } },
  },
  title: 'Components/Service/RESI File Diff Chart/RESIFileDiffChart',
} as Meta<typeof RESIFileDiffChart>;
