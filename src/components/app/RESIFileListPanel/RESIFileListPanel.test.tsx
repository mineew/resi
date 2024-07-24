import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { type StoreState } from '@/store/types/StoreState';

import RESIFileListPanel from './RESIFileListPanel';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),

  storeState: {
    files: [
      {
        name: 'File 1',
        color: 'red',
        strokeWidth: 1,
        checked: true,
        contents: [3, 3, 6, 6, 6, 4],
      },
      {
        name: 'File 2',
        color: 'green',
        strokeWidth: 1,
        checked: true,
        contents: [5, 5, 5, 3, 1, 7],
      },
      {
        name: 'File 3',
        color: 'blue',
        strokeWidth: 1,
        checked: true,
        contents: [4, 4, 8, 12, 3, 17],
      },
    ],
    setFiles: vi.fn(),
    addFiles: vi.fn(),
    deleteAllFiles: vi.fn(),
    checkAllFiles: vi.fn(),
    uncheckAllFiles: vi.fn(),
    changeFileColor: vi.fn(),
    changeFileStrokeWidth: vi.fn(),
    toggleFile: vi.fn(),
    deleteFile: vi.fn(),
    settings: {},
    setSettings: vi.fn(),
    setOffsetLeft: vi.fn(),
    setOffsetRight: vi.fn(),
  } satisfies StoreState,

  processFiles: vi.fn(() => Promise.resolve([])),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

vi.mock('@/store/store', () => ({
  default: (selector: (state: StoreState) => unknown) => {
    return selector(mocks.storeState);
  },
}));

vi.mock('@/utils/resi-files/processFiles', () => ({
  default: mocks.processFiles,
}));

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

describe('@/components/app/RESIFileListPanel', () => {
  it('renders', async () => {
    render(<RESIFileListPanel />);

    const panel = await screen.findByTestId('resi-file-list-panel');
    expect(panel).toBeInTheDocument();
  });

  it('can open RESI files', async () => {
    const user = userEvent.setup();
    render(<RESIFileListPanel />);

    const buttons = await screen.findAllByRole('button');
    await user.click(buttons[0]);

    expect(mocks.processFiles).toHaveBeenCalledTimes(1);
  });

  it('can fetch RESI files', async () => {
    const user = userEvent.setup();
    mocks.storeState.files = [];
    render(<RESIFileListPanel />);

    const buttons = await screen.findAllByRole('button');
    await user.click(buttons[1]);

    expect(mocks.processFiles).toHaveBeenCalledTimes(2);
  });
});
