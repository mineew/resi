import { render, screen } from '@testing-library/react';

import RESIFileDiffChartEmpty from './RESIFileDiffChartEmpty';

describe('@/components/service/resi-file-diff-chart/RESIFileDiffChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileDiffChartEmpty />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
