import { render, screen } from '@testing-library/react';

import { type StoreState } from '@/store/types/StoreState';

import RESIFileGrowthChartPanel from './RESIFileGrowthChartPanel';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),

  storeState: {
    files: [
      {
        name: 'File 1',
        color: 'red',
        strokeWidth: 1,
        checked: true,
        contents: [3, 3, 6, 6, 6, 4],
      },
      {
        name: 'File 2',
        color: 'green',
        strokeWidth: 1,
        checked: true,
        contents: [5, 5, 5, 3, 1, 7],
      },
      {
        name: 'File 3',
        color: 'blue',
        strokeWidth: 1,
        checked: true,
        contents: [4, 4, 8, 12, 3, 17],
      },
    ],
    setFiles: vi.fn(),
    addFiles: vi.fn(),
    deleteAllFiles: vi.fn(),
    checkAllFiles: vi.fn(),
    uncheckAllFiles: vi.fn(),
    changeFileColor: vi.fn(),
    changeFileStrokeWidth: vi.fn(),
    toggleFile: vi.fn(),
    deleteFile: vi.fn(),
    settings: {
      chunkSize: 1,
    },
    setSettings: vi.fn(),
    setOffsetLeft: vi.fn(),
    setOffsetRight: vi.fn(),
  } satisfies StoreState,
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

vi.mock('@/store/store', () => ({
  default: (selector: (state: StoreState) => unknown) => {
    return selector(mocks.storeState);
  },
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

describe('@/components/app/RESIFileGrowthChartPanel', () => {
  it('renders', () => {
    render(<RESIFileGrowthChartPanel />);

    const chartTitle = screen.getByText('RESI_FILE_GROWTH_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });

  it('can render an empty state', () => {
    mocks.storeState.files = [];
    render(<RESIFileGrowthChartPanel />);

    const emptyDescription = screen.getByText(
      'COMMON.CHARTS.SCATTER_CHART_NO_DATA',
    );

    expect(emptyDescription).toBeInTheDocument();
  });
});
