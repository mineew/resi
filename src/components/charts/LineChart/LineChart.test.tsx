import { render, screen } from '@testing-library/react';

import LineChart from './LineChart';
import type { LineChartDataset } from './LineChartDataset';

const data: LineChartDataset[] = [
  {
    name: 'Dataset 1',
    contents: [1, 2, 3, 4, 5],
    color: '#FF0000',
    strokeWidth: 1,
  },
  {
    name: 'Dataset 2',
    contents: [6, 7, 8, 9, 10],
    color: '#00FF00',
    strokeWidth: 2,
  },
  {
    name: 'Dataset 3',
    contents: [11, 12, 13],
    color: '#0000FF',
    strokeWidth: 3,
  },
];

describe('@/components/charts/LineChart', () => {
  it('renders', () => {
    render(
      <LineChart
        title="Line Chart"
        data={data}
        xConverter={(x) => x + 1}
        xTickCount={10}
        offsetGap={1}
        offsetLeft={2}
        offsetRight={10}
        step={3}
        width={1000}
        height={1000}
      />,
    );

    const container = screen.getByTestId('line-chart-container');
    expect(container).toBeInTheDocument();
  });

  it('can render axis labels', () => {
    render(
      <LineChart
        title="Line Chart"
        data={data}
        xLabel="X Label"
        yLabel="Y Label"
        width={1000}
        height={1000}
      />,
    );

    const xLabel = screen.getByText('X Label');
    expect(xLabel).toBeInTheDocument();
  });
});
