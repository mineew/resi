import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { type RESIFile } from '@/store/types/RESIFile';

import RESIFileListPanel from './RESIFileListPanel';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
    t: (message: string) => message,
  })),
  useLocalStorage: vi.fn(() => [false, () => undefined]),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

vi.mock('use-local-storage', () => ({
  default: mocks.useLocalStorage,
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

const file1: RESIFile = {
  name: 'File 1',
  color: 'red',
  strokeWidth: 1,
  checked: true,
  contents: [3, 3, 6, 6, 6, 4],
};

const file2: RESIFile = {
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  checked: true,
  contents: [5, 5, 5, 3, 1, 7],
};

const file3: RESIFile = {
  name: 'File 3',
  color: 'blue',
  strokeWidth: 1,
  checked: true,
  contents: [4, 4, 8, 12, 3, 17],
};

const files = [file1, file2, file3];
const handleAddFiles = vi.fn();
const handleFetchExampleFiles = vi.fn();
const handleDeleteAllFiles = vi.fn();
const handleSelectAllFiles = vi.fn();
const handleUnselectAllFiles = vi.fn();
const handleChangeFileColor = vi.fn();
const handleChangeFileStrokeWidth = vi.fn();
const handleChangeFileChecked = vi.fn();
const handleDeleteFile = vi.fn();
const appSettings = <div data-testid="app-settings">App Settings</div>;

describe('@/components/service/resi-file-list/RESIFileListPanel', () => {
  it('renders', () => {
    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const container = screen.getByTestId('resi-file-list-panel');
    expect(container).toBeInTheDocument();
  });

  it('can render the empty state', () => {
    render(
      <RESIFileListPanel
        files={[]}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const emptyDescription = screen.getByText(
      'RESI_FILE_LIST.OPEN_FILES_DESCRIPTION',
    );

    expect(emptyDescription).toBeInTheDocument();
  });

  it('can render file settings popover', async () => {
    const user = userEvent.setup();

    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const button = screen.getByRole('button', { name: 'File 1' });
    await user.click(button);

    const settings = screen.getByTestId('resi-file-settings');
    expect(settings).toBeInTheDocument();
  });

  it('warns about deleting a file', async () => {
    const user = userEvent.setup();
    mocks.useLocalStorage.mockReturnValue([false, () => undefined]);

    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const deleteButtons = screen.queryAllByRole('button', {
      name: 'RESI_FILE_LIST.DELETE_ITEM',
    });

    await user.click(deleteButtons[0]);

    const warning = screen.getByText('RESI_FILE_LIST.DELETE_ITEM_WARNING');
    expect(warning).toBeInTheDocument();
    expect(handleDeleteFile).toHaveBeenCalledTimes(0);
  });

  it('does not warn about deleting a file', async () => {
    const user = userEvent.setup();
    mocks.useLocalStorage.mockReturnValue([true, () => undefined]);

    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const deleteButtons = screen.queryAllByRole('button', {
      name: 'RESI_FILE_LIST.DELETE_ITEM',
    });

    await user.click(deleteButtons[0]);

    const warning = screen.queryByText('RESI_FILE_LIST.DELETE_ITEM_WARNING');
    expect(warning).not.toBeInTheDocument();
    expect(handleDeleteFile).toHaveBeenCalledTimes(1);
  });

  it('warns about deleting all files', async () => {
    const user = userEvent.setup();
    mocks.useLocalStorage.mockReturnValue([false, () => undefined]);

    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const buttons = screen.queryAllByRole('button');
    await user.click(buttons[1]);

    const clearAllFilesMenuItem = screen.getByText(
      'RESI_FILE_LIST.CLEAR_FILES',
    );
    await user.click(clearAllFilesMenuItem);

    const warning = screen.getByText('RESI_FILE_LIST.CLEAR_FILES_WARNING');
    expect(warning).toBeInTheDocument();
    expect(handleDeleteAllFiles).toHaveBeenCalledTimes(0);
  });

  it('does not warn about deleting all files', async () => {
    const user = userEvent.setup();
    mocks.useLocalStorage.mockReturnValue([true, () => undefined]);

    render(
      <RESIFileListPanel
        files={files}
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        onDeleteAllFiles={handleDeleteAllFiles}
        onSelectAllFiles={handleSelectAllFiles}
        onUnselectAllFiles={handleUnselectAllFiles}
        onChangeFileColor={handleChangeFileColor}
        onChangeFileStrokeWidth={handleChangeFileStrokeWidth}
        onChangeFileChecked={handleChangeFileChecked}
        onDeleteFile={handleDeleteFile}
        appSettings={appSettings}
      />,
    );

    const buttons = screen.queryAllByRole('button');
    await user.click(buttons[1]);

    const clearAllFilesMenuItem = screen.getByText(
      'RESI_FILE_LIST.CLEAR_FILES',
    );
    await user.click(clearAllFilesMenuItem);

    const warning = screen.queryByText('RESI_FILE_LIST.CLEAR_FILES_WARNING');
    expect(warning).not.toBeInTheDocument();
    expect(handleDeleteAllFiles).toHaveBeenCalledTimes(1);
  });
});
