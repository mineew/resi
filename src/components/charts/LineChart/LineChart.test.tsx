import { render, screen } from '@testing-library/react';

import LineChart from './LineChart';
import type { LineChartDataset } from './LineChartDataset';

const data: LineChartDataset[] = [
  {
    strokeWidth: 1,
    color: '#FF0000',
    name: 'Dataset 1',
    contents: [1, 2, 3, 4, 5],
  },
  {
    strokeWidth: 2,
    color: '#00FF00',
    name: 'Dataset 2',
    contents: [6, 7, 8, 9, 10],
  },
  {
    strokeWidth: 3,
    color: '#0000FF',
    name: 'Dataset 3',
    contents: [11, 12, 13],
  },
];

describe('@/components/charts/LineChart', () => {
  it('renders', () => {
    render(
      <LineChart
        step={3}
        data={data}
        width={1000}
        offsetGap={1}
        height={1000}
        offsetLeft={2}
        xTickCount={10}
        offsetRight={10}
        title="Line Chart"
        xConverter={(x) => x + 1}
      />,
    );

    const container = screen.getByTestId('line-chart-container');
    expect(container).toBeInTheDocument();
  });

  it('can render axis labels', () => {
    render(
      <LineChart
        data={data}
        width={1000}
        height={1000}
        xLabel="X Label"
        yLabel="Y Label"
        title="Line Chart"
      />,
    );

    const xLabel = screen.getByText('X Label');
    expect(xLabel).toBeInTheDocument();
  });
});
