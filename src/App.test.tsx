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

const matchMediaMock = vi.fn(() => ({
  matches: false,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

beforeAll(() => {
  vi.stubGlobal('matchMedia', matchMediaMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/App', () => {
  it('renders', () => {
    render(<App />);

    const layout = screen.getByTestId('app-layout');
    expect(layout).toBeInTheDocument();
  });
});
