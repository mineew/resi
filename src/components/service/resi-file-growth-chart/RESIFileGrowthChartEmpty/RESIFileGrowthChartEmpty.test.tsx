import { render, screen } from '@testing-library/react';

import RESIFileGrowthChartEmpty from './RESIFileGrowthChartEmpty';

describe('@/components/service/resi-file-growth-chart/RESIFileGrowthChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileGrowthChartEmpty />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
