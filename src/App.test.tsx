import { render, screen } from '@testing-library/react';

import App from './App';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/App', () => {
  it('renders', () => {
    render(<App />);

    const layout = screen.getByTestId('app-layout');
    expect(layout).toBeInTheDocument();
  });
});
