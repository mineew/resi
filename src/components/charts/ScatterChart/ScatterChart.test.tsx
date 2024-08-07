import { render, screen } from '@testing-library/react';

import ScatterChart from './ScatterChart';
import { type ScatterChartPoint } from './ScatterChartPoint';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

const points: ScatterChartPoint[] = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];

describe('@/components/charts/ScatterChart', () => {
  it('renders', () => {
    render(
      <ScatterChart
        title="Scatter Chart"
        points={points}
        width={1000}
        height={1000}
      />,
    );

    const container = screen.getByTestId('scatter-chart-container');
    expect(container).toBeInTheDocument();
  });

  it('can render axis labels', () => {
    render(
      <ScatterChart
        title="Scatter Chart"
        points={points}
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
