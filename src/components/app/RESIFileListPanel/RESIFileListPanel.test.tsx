import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { commonMocks } from '~/vitest.mocks.hoisted';

import RESIFileListPanel from './RESIFileListPanel';

const mocks = vi.hoisted(() => ({
  processFiles: vi.fn(() => Promise.resolve([])),
}));

vi.mock('@/utils/resi-files/processFiles', () => ({
  default: mocks.processFiles,
}));

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
    commonMocks.storeState.files = [];
    render(<RESIFileListPanel />);

    const buttons = await screen.findAllByRole('button');
    await user.click(buttons[1]);

    expect(mocks.processFiles).toHaveBeenCalledTimes(2);
  });
});
