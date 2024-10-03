import { render, screen } from '@testing-library/react';

import type { RESIFileGrowth } from '@/store/types/RESIFileGrowth';

import RESIFileGrowthChart from './RESIFileGrowthChart';

const growth: RESIFileGrowth[] = [
  { growth: 1, distance: 1 },
  { growth: 2, distance: 2 },
  { growth: 3, distance: 3 },
];

describe('@/components/service/resi-file-growth-chart/RESIFileGrowthChart', () => {
  it('renders', () => {
    render(<RESIFileGrowthChart growth={growth} />);

    const chartTitle = screen.getByText('RESI_FILE_GROWTH_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });
});
