import { render, screen } from '@testing-library/react';

import { commonMocks, files } from '~/vitest.mocks.hoisted';

import RESIFilesInit from './RESIFilesInit';

describe('@/components/app/RESIFileDiffChartPanel', () => {
  it('renders if there are no files', () => {
    commonMocks.storeState.files = [];
    render(<RESIFilesInit />);

    const openFilesSection = screen.getByText('RESI_FILE_LIST.OPEN_FILES');
    expect(openFilesSection).toBeInTheDocument();

    const fetchFilesSection = screen.getByText('RESI_FILE_LIST.FETCH_FILES');
    expect(fetchFilesSection).toBeInTheDocument();
  });

  it('does not render if there are files', () => {
    commonMocks.storeState.files = files;
    render(<RESIFilesInit />);

    const openFilesSection = screen.queryByText('RESI_FILE_LIST.OPEN_FILES');
    expect(openFilesSection).not.toBeInTheDocument();

    const fetchFilesSection = screen.queryByText('RESI_FILE_LIST.FETCH_FILES');
    expect(fetchFilesSection).not.toBeInTheDocument();
  });
});
