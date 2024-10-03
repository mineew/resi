import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';
import smoothFiles from '@/utils/resi-files/smoothFiles';

import RESIFileChart from './RESIFileChart';

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

export const Default: StoryFn<typeof RESIFileChart> = ({
  shouldRenderChunkSize,
  interactive,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(60);
  const [offsetRight, setOffsetRight] = useState(420);

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileChart
        files={smoothFiles(files, 3, 'mean', 1000)}
        chunkSize={1000}
        shouldRenderChunkSize={shouldRenderChunkSize}
        offsetGap={10}
        offsetLeft={offsetLeft}
        onChangeOffsetLeft={setOffsetLeft}
        offsetRight={offsetRight}
        onChangeOffsetRight={setOffsetRight}
        interactive={interactive}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File Chart/RESIFileChart',
  component: RESIFileChart,
  argTypes: {
    files: { table: { disable: true } },
    chunkSize: { table: { disable: true } },
    offsetGap: { table: { disable: true } },
    offsetLeft: { table: { disable: true } },
    onChangeOffsetLeft: { table: { disable: true } },
    offsetRight: { table: { disable: true } },
    onChangeOffsetRight: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
  },
  args: {
    shouldRenderChunkSize: false,
    interactive: true,
  },
} as Meta<typeof RESIFileChart>;
