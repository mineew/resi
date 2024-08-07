import { render, screen } from '@testing-library/react';

import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

import RESIFileGrowthChart from './RESIFileGrowthChart';

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

const growth: RESIFileGrowth[] = [
  { distance: 1, growth: 1 },
  { distance: 2, growth: 2 },
  { distance: 3, growth: 3 },
];

describe('@/components/service/resi-file-growth-chart/RESIFileGrowthChart', () => {
  it('renders', () => {
    render(<RESIFileGrowthChart growth={growth} />);

    const chartTitle = screen.getByText('RESI_FILE_GROWTH_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });
});
