import { render, screen } from '@testing-library/react';

import ScatterChart from './ScatterChart';
import type { ScatterChartPoint } from './ScatterChartPoint';

const points: ScatterChartPoint[] = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];

describe('@/components/charts/ScatterChart', () => {
  it('renders', () => {
    render(
      <ScatterChart
        width={1000}
        height={1000}
        points={points}
        title="Scatter Chart"
      />,
    );

    const container = screen.getByTestId('scatter-chart-container');
    expect(container).toBeInTheDocument();
  });

  it('can render axis labels', () => {
    render(
      <ScatterChart
        width={1000}
        height={1000}
        points={points}
        xLabel="X Label"
        yLabel="Y Label"
        title="Scatter Chart"
      />,
    );

    const xLabel = screen.getByText('X Label');
    expect(xLabel).toBeInTheDocument();
  });
});
