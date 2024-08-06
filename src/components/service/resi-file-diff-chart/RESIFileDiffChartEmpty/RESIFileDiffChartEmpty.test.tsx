import { render, screen } from '@testing-library/react';

import RESIFileDiffChartEmpty from './RESIFileDiffChartEmpty';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/components/service/resi-file-diff-chart/RESIFileDiffChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileDiffChartEmpty />);

    const emptyDescription = screen.getByText('CHARTS.SCATTER_CHART_NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
