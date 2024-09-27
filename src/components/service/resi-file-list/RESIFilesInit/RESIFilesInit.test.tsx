import { render, screen } from '@testing-library/react';

import RESIFilesInit from './RESIFilesInit';

describe('@/components/service/resi-file-list/RESIFilesInit', () => {
  it('renders', () => {
    const handleAddFiles = vi.fn();
    const handleFetchExampleFiles = vi.fn();

    render(
      <RESIFilesInit
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
      />,
    );

    const openFilesSection = screen.getByText('RESI_FILE_LIST.OPEN_FILES');
    expect(openFilesSection).toBeInTheDocument();

    const fetchFilesSection = screen.getByText('RESI_FILE_LIST.FETCH_FILES');
    expect(fetchFilesSection).toBeInTheDocument();
  });

  it('can render loading state', () => {
    const handleAddFiles = vi.fn();
    const handleFetchExampleFiles = vi.fn();

    render(
      <RESIFilesInit
        onAddFiles={handleAddFiles}
        onFetchExampleFiles={handleFetchExampleFiles}
        isAddingFiles
        isFetchingFiles
      />,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).toBeDisabled();
  });
});
