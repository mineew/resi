import { render, screen } from '@testing-library/react';

import { commonMocks } from '~/vitest.mocks.hoisted';

import RESIFileDiffChartPanel from './RESIFileDiffChartPanel';

describe('@/components/app/RESIFileDiffChartPanel', () => {
  it('renders', () => {
    render(<RESIFileDiffChartPanel />);

    const chartTitle = screen.getByText('RESI_FILE_DIFF_CHART.TITLE');
    expect(chartTitle).toBeInTheDocument();
  });

  it('can render an empty state', () => {
    commonMocks.storeState.files = [];
    render(<RESIFileDiffChartPanel />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
