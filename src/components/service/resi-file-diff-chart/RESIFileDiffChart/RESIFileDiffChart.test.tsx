import { render, screen } from '@testing-library/react';

import type { RESIFileDiff } from '@/store/types/RESIFileDiff';
import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';

import RESIFileDiffChart from './RESIFileDiffChart';

const diffs: RESIFileDiff[] = [
  {
    diff: 100,
    distance: 100,
    totalDiff: 100,
    totalDistance: 100,
    fileA: createRandomRESIFile('File 1 (A)'),
    fileB: createRandomRESIFile('File 2 (B)'),
  },
  {
    diff: 200,
    distance: 200,
    totalDiff: 200,
    totalDistance: 200,
    fileA: createRandomRESIFile('File 3 (A)'),
    fileB: createRandomRESIFile('File 4 (B)'),
  },
  {
    diff: 300,
    distance: 300,
    totalDiff: 300,
    totalDistance: 300,
    fileA: createRandomRESIFile('File 5 (A)'),
    fileB: createRandomRESIFile('File 6 (B)'),
  },
];

describe('@/components/service/resi-file-diff-chart/RESIFileDiffChart', () => {
  it('renders', () => {
    render(<RESIFileDiffChart diffs={diffs} />);

    const chartTitle = screen.getByText('RESI_FILE_DIFF_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });
});
