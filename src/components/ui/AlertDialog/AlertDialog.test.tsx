import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AlertDialog from './AlertDialog';

describe('@/components/ui/AlertDialog', () => {
  it('renders', () => {
    render(<AlertDialog open />);

    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toBeInTheDocument();
  });

  it('can be closed with an action', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();
    const handleAction = vi.fn();

    render(
      <AlertDialog
        cancelLabel="No"
        actionLabel="Yes"
        onAction={handleAction}
        onOpenChange={handleOpenChange}
        open
      />,
    );

    const yesButton = screen.getByRole('button', { name: 'Yes' });
    await user.click(yesButton);

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it('can be canceled', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();
    const handleAction = vi.fn();

    render(
      <AlertDialog
        cancelLabel="No"
        actionLabel="Yes"
        onAction={handleAction}
        onOpenChange={handleOpenChange}
        open
      />,
    );

    const noButton = screen.getByRole('button', { name: 'No' });
    await user.click(noButton);

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
    expect(handleAction).toHaveBeenCalledTimes(0);
  });

  it('can be canceled by ESC', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();
    const handleAction = vi.fn();

    render(
      <AlertDialog
        onAction={handleAction}
        onOpenChange={handleOpenChange}
        open
      />,
    );

    await user.keyboard('{Escape}');

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
    expect(handleAction).toHaveBeenCalledTimes(0);
  });

  it('provides an option to hide re-openings', async () => {
    const user = userEvent.setup();
    const handleChangeDontShowAgain = vi.fn();

    render(
      <AlertDialog onChangeDontShowAgain={handleChangeDontShowAgain} open />,
    );

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChangeDontShowAgain).toHaveBeenCalledTimes(1);
    expect(handleChangeDontShowAgain).toHaveBeenCalledWith(true);
  });

  it('can render a custom trigger', async () => {
    const user = userEvent.setup();

    render(
      <AlertDialog
        trigger={<button type="button">Open Alert Dialog</button>}
      />,
    );

    const button = screen.getByRole('button', { name: 'Open Alert Dialog' });
    expect(button).toBeInTheDocument();

    const closedDialog = screen.queryByRole('alertdialog');
    expect(closedDialog).not.toBeInTheDocument();

    await user.click(button);

    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toBeInTheDocument();
  });
});
