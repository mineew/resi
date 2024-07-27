import { render, screen } from '@testing-library/react';

import AppToolbar from './AppToolbar';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),

  matchMedia: vi.fn(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

beforeAll(() => {
  vi.stubGlobal('matchMedia', mocks.matchMedia);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/components/app/AppToolbar', () => {
  it('renders', () => {
    render(<AppToolbar />);

    const toolbar = screen.getByTestId('app-toolbar');
    expect(toolbar).toBeInTheDocument();
  });
});
