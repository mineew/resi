import { render, screen } from '@testing-library/react';

import LineChart from './LineChart';
import { type LineChartDataset } from './LineChartDataset';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
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

const data: LineChartDataset[] = [
  {
    name: 'Dataset 1',
    contents: [1, 2, 3, 4, 5],
    color: '#FF0000',
    strokeWidth: 1,
  },
  {
    name: 'Dataset 2',
    contents: [1, 2, 3, 4, 5],
    color: '#FF0000',
    strokeWidth: 1,
  },
  {
    name: 'Dataset 3',
    contents: [1, 2, 3, 4, 5],
    color: '#FF0000',
    strokeWidth: 1,
  },
];

describe('@/components/charts/LineChart', () => {
  it('renders', () => {
    render(
      <LineChart title="Line Chart" data={data} width={1000} height={1000} />,
    );

    const container = screen.getByTestId('line-chart-container');
    expect(container).toBeInTheDocument();
  });
});
