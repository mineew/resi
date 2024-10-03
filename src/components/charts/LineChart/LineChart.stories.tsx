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
      strokeWidth: 1,
      color: '#FF0000',
      contents: [2, 4, 6, 8, 6, 2],
    },
    {
      name: 'Line-2',
      strokeWidth: 1,
      color: '#00FF00',
      contents: [2, 12, 12, 8, 4, 3],
    },
    {
      name: 'Line-3',
      strokeWidth: 1,
      color: '#0000FF',
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
  component: LineChart,
  title: 'Components/Charts/LineChart',
  args: {
    xLabel: 'X Axis Label',
    yLabel: 'Y Axis Label',
    title: 'Line Chart Title',
  },
  argTypes: {
    data: { table: { disable: true } },
    step: { table: { disable: true } },
    width: { table: { disable: true } },
    height: { table: { disable: true } },
    offsetGap: { table: { disable: true } },
    xConverter: { table: { disable: true } },
    xTickCount: { table: { disable: true } },
    yTickCount: { table: { disable: true } },
    offsetLeft: { table: { disable: true } },
    offsetRight: { table: { disable: true } },
    interactive: { table: { disable: true } },
    exportFilename: { table: { disable: true } },
    tooltipFormatter: { table: { disable: true } },
    onChangeOffsetLeft: { table: { disable: true } },
    onChangeOffsetRight: { table: { disable: true } },
  },
} as Meta<typeof LineChart>;
