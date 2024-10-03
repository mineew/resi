import { render, screen } from '@testing-library/react';

import type { RESIFile } from '@/store/types/RESIFile';

import RESIFileChart from './RESIFileChart';

const file1: RESIFile = {
  color: 'red',
  checked: true,
  name: 'File 1',
  strokeWidth: 1,
  contents: [3, 3, 6, 6, 6, 4],
};

const file2: RESIFile = {
  checked: true,
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  contents: [5, 5, 5, 3, 1, 7],
};

const file3: RESIFile = {
  color: 'blue',
  checked: true,
  name: 'File 3',
  strokeWidth: 1,
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
        width={1000}
        files={files}
        chunkSize={2}
        height={1000}
        shouldRenderChunkSize
      />,
    );

    const stepLine = container.querySelector('.step-line');
    expect(stepLine).toBeInTheDocument();
  });
});
