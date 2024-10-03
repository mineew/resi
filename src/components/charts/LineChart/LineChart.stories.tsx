import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import LineChart from './LineChart';
import type { LineChartDataset } from './LineChartDataset';

export const Default: StoryFn<typeof LineChart> = ({
  title,
  xLabel,
  yLabel,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(1);
  const [offsetRight, setOffsetRight] = useState(6);

  const data: LineChartDataset[] = [
    {
      name: 'Line-1',
      color: '#FF0000',
      strokeWidth: 1,
      contents: [2, 4, 6, 8, 6, 2],
    },
    {
      name: 'Line-2',
      color: '#00FF00',
      strokeWidth: 1,
      contents: [2, 12, 12, 8, 4, 3],
    },
    {
      name: 'Line-3',
      color: '#0000FF',
      strokeWidth: 1,
      contents: [10, 11, 8, 6, 3, 2, 1],
    },
  ];

  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <LineChart
        title={title}
        data={data}
        xLabel={xLabel}
        xTickCount={8}
        yLabel={yLabel}
        yTickCount={10}
        offsetGap={1}
        offsetLeft={offsetLeft}
        onChangeOffsetLeft={setOffsetLeft}
        offsetRight={offsetRight}
        onChangeOffsetRight={setOffsetRight}
        step={0}
        interactive
      />
    </div>
  );
};

export default {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  argTypes: {
    data: { table: { disable: true } },
    xConverter: { table: { disable: true } },
    xTickCount: { table: { disable: true } },
    yTickCount: { table: { disable: true } },
    offsetGap: { table: { disable: true } },
    offsetLeft: { table: { disable: true } },
    onChangeOffsetLeft: { table: { disable: true } },
    offsetRight: { table: { disable: true } },
    onChangeOffsetRight: { table: { disable: true } },
    tooltipFormatter: { table: { disable: true } },
    step: { table: { disable: true } },
    interactive: { table: { disable: true } },
    exportFilename: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
  },
  args: {
    title: 'Line Chart Title',
    xLabel: 'X Axis Label',
    yLabel: 'Y Axis Label',
  },
} as Meta<typeof LineChart>;
