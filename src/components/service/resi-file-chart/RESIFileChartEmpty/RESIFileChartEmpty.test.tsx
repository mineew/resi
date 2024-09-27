import { render, screen } from '@testing-library/react';

import RESIFileChartEmpty from './RESIFileChartEmpty';

describe('@/components/service/resi-file-chart/RESIFileChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileChartEmpty />);

    const emptyDescription = screen.getByText('RESI_FILE_CHART.NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });

  it('can render additional content', () => {
    render(
      <RESIFileChartEmpty>
        <div>Additional Content</div>
      </RESIFileChartEmpty>,
    );

    const additionalContent = screen.getByText('Additional Content');
    expect(additionalContent).toBeInTheDocument();
  });
});
