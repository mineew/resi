import type { Meta, StoryFn } from '@storybook/react';

import getRandomArray from '@/utils/misc/getRandomArray';
import getRandomInt from '@/utils/misc/getRandomInt';

import ScatterChart from './ScatterChart';
import type { ScatterChartPoint } from './ScatterChartPoint';

export const Default: StoryFn<typeof ScatterChart> = ({
  title,
  xLabel,
  yLabel,
}) => {
  const points: ScatterChartPoint[] = getRandomArray(
    () => ({ x: getRandomInt(10, 50), y: getRandomInt(-30, 40) }),
    getRandomInt(50, 100),
  );

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <ScatterChart
        title={title}
        points={points}
        xLabel={xLabel}
        yLabel={yLabel}
      />
    </div>
  );
};

export default {
  component: ScatterChart,
  title: 'Components/Charts/ScatterChart',
  args: {
    xLabel: 'X Axis Label',
    yLabel: 'Y Axis Label',
    title: 'Scatter Chart Title',
  },
  argTypes: {
    width: { table: { disable: true } },
    points: { table: { disable: true } },
    height: { table: { disable: true } },
    exportFilename: { table: { disable: true } },
  },
} as Meta<typeof ScatterChart>;
