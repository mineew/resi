import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { commonMocks } from '~/vitest.mocks.hoisted';

import AppToolbar from './AppToolbar';

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

  it('is watching for a change in the system theme', () => {
    type Listener = (e: MediaQueryListEvent) => void;
    let listeners: Listener[] = [];

    matchMediaMock.mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn((_: string, listener: Listener) => {
        listeners.push(listener);
      }),
      removeEventListener: vi.fn((_: string, listener: Listener) => {
        listeners = listeners.filter((l) => l !== listener);
      }),
    }));

    const { baseElement, unmount } = render(<AppToolbar />);

    expect(listeners).toHaveLength(1);

    act(() => {
      listeners.forEach((l) => l({ matches: true } as MediaQueryListEvent));
    });

    expect(baseElement).toHaveClass('dark');

    act(() => {
      listeners.forEach((l) => l({ matches: false } as MediaQueryListEvent));
    });

    expect(baseElement).not.toHaveClass('dark');

    unmount();

    expect(listeners).toHaveLength(0);
  });

  it('can change current lang', async () => {
    const user = userEvent.setup();
    render(<AppToolbar />);

    const buttons = screen.queryAllByRole('button');
    const langDropdownButton = buttons[1];
    await user.click(langDropdownButton);

    const menuItems = screen.getAllByRole('menuitem');
    const ruLangItem = menuItems[1];
    await user.click(ruLangItem);

    expect(commonMocks.changeLanguage).toHaveBeenCalledTimes(1);
    expect(commonMocks.changeLanguage).toHaveBeenLastCalledWith('ru');
  });
});
