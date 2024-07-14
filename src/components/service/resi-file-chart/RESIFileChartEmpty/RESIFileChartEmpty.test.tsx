import { render, screen } from '@testing-library/react';

import RESIFileChartEmpty from './RESIFileChartEmpty';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/components/service/resi-file-chart/RESIFileChartEmpty', () => {
  it('renders', () => {
    render(<RESIFileChartEmpty />);

    const emptyDescription = screen.getByText('RESI_FILE_CHART.NO_DATA');
    expect(emptyDescription).toBeInTheDocument();
  });
});
