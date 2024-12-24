import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import smoothFiles from '@/utils/resi-files/smoothFiles';

import RESIFileChart from './RESIFileChart';

const files = getRandomArray(
  (idx) =>
    createRandomRESIFile(`File-${idx + 1}`, {
      color: '',
      strokeWidth: 1,
      contentsLength: 50000,
      contentsItemMin: (idx + 1) * 50,
      contentsItemMax: (idx + 1) * 250,
    }),
  3,
);

export const Default: StoryFn<typeof RESIFileChart> = ({
  interactive,
  shouldRenderChunkSize,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(60);
  const [offsetRight, setOffsetRight] = useState(420);

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileChart
        offsetGap={10}
        chunkSize={1000}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        interactive={interactive}
        onChangeOffsetLeft={setOffsetLeft}
        onChangeOffsetRight={setOffsetRight}
        files={smoothFiles(files, 3, 'mean', 1000)}
        shouldRenderChunkSize={shouldRenderChunkSize}
      />
    </div>
  );
};

export default {
  component: RESIFileChart,
  title: 'Components/Service/RESI File Chart/RESIFileChart',
  args: {
    interactive: true,
    shouldRenderChunkSize: false,
  },
  argTypes: {
    files: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
    chunkSize: { table: { disable: true } },
    offsetGap: { table: { disable: true } },
    offsetLeft: { table: { disable: true } },
    offsetRight: { table: { disable: true } },
    onChangeOffsetLeft: { table: { disable: true } },
    onChangeOffsetRight: { table: { disable: true } },
  },
} as Meta<typeof RESIFileChart>;
