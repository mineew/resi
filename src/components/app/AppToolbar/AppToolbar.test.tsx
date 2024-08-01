import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AppToolbar from './AppToolbar';

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

beforeEach(() => {
  window.localStorage.clear();
});

describe('@/components/app/AppToolbar', () => {
  it('renders', () => {
    render(<AppToolbar />);

    const toolbar = screen.getByTestId('app-toolbar');
    expect(toolbar).toBeInTheDocument();
  });

  it('can toggle theme', async () => {
    const user = userEvent.setup();
    const { baseElement } = render(<AppToolbar />);

    const buttons = screen.queryAllByRole('button');
    const themeButton = buttons[0];

    await user.click(themeButton);
    expect(baseElement).toHaveClass('dark');

    await user.click(themeButton);
    expect(baseElement).not.toHaveClass('dark');
  });

  it('can initialize theme', () => {
    matchMediaMock.mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    const { baseElement } = render(<AppToolbar />);
    expect(baseElement).toHaveClass('dark');
  });

  it('can initialize theme', () => {
    matchMediaMock.mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    const { baseElement } = render(<AppToolbar />);
    expect(baseElement).toHaveClass('dark');
  });
});
