import { render, screen } from '@testing-library/react';

import { commonMocks } from '~/vitest.mocks.hoisted';

import RESIFileGrowthChartPanel from './RESIFileGrowthChartPanel';

describe('@/components/app/RESIFileGrowthChartPanel', () => {
  it('renders', () => {
    render(<RESIFileGrowthChartPanel />);

    const chartTitle = screen.getByText('RESI_FILE_GROWTH_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });

  it('can render an empty state', () => {
    commonMocks.storeState.files = [];
    render(<RESIFileGrowthChartPanel />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
