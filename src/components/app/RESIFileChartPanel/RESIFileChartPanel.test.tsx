import { render, screen } from '@testing-library/react';

import { commonMocks } from '~/vitest.mocks.hoisted';

import RESIFileChartPanel from './RESIFileChartPanel';

describe('@/components/app/RESIFileChartPanel', () => {
  it('renders', () => {
    render(<RESIFileChartPanel />);

    const chartTitle = screen.getByText('RESI_FILE_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });

  it('can render an empty state', () => {
    commonMocks.storeState.files = [];
    render(<RESIFileChartPanel />);

    const emptyDescription = screen.getByText('RESI_FILE_CHART.NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
