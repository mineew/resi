import { render, screen } from '@testing-library/react';

import RESIFileGrowthChartEmpty from './RESIFileGrowthChartEmpty';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/components/service/resi-file-growth-chart/RESIFileGrowthChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileGrowthChartEmpty />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
