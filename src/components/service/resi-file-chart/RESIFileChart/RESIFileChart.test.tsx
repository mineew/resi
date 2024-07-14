/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import { render, screen } from '@testing-library/react';

import { type RESIFile } from '@/store/types/RESIFile';

import RESIFileChart from './RESIFileChart';

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

const file1: RESIFile = {
  name: 'File 1',
  color: 'red',
  strokeWidth: 1,
  checked: true,
  contents: [3, 3, 6, 6, 6, 4],
};

const file2: RESIFile = {
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  checked: true,
  contents: [5, 5, 5, 3, 1, 7],
};

const file3: RESIFile = {
  name: 'File 3',
  color: 'blue',
  strokeWidth: 1,
  checked: true,
  contents: [4, 4, 8, 12, 3, 17],
};

const files = [file1, file2, file3];

describe('@/components/service/resi-file-chart/RESIFileChart', () => {
  it('renders', () => {
    render(<RESIFileChart files={files} />);

    const chartTitle = screen.getByText('RESI_FILE_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });

  it('can render the chunk size', () => {
    const { container } = render(
      <RESIFileChart
        files={files}
        chunkSize={2}
        shouldRenderChunkSize
        width={1000}
        height={1000}
      />,
    );

    const stepLine = container.querySelector('.step-line');
    expect(stepLine).toBeInTheDocument();
  });
});
