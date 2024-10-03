import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Dialog from './Dialog';

describe('@/components/ui/Dialog', () => {
  it('renders', () => {
    render(
      <Dialog
        title="Dialog Title"
        trigger={<button type="button">Open Dialog</button>}
        open
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('can be closed', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Dialog
        title="Dialog Title"
        trigger={<button type="button">Open Dialog</button>}
        onOpenChange={handleOpenChange}
        open
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('can be closed by ESC', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Dialog
        title="Dialog Title"
        tooltip="Dialog Trigger Tooltip"
        trigger={<button type="button">Open Dialog</button>}
        onOpenChange={handleOpenChange}
        open
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    await user.keyboard('{Escape}');

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('can display footer', () => {
    render(
      <Dialog
        title="Dialog Title"
        footer={<p>Footer Content</p>}
        trigger={<button type="button">Open Dialog</button>}
        open
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    const footer = screen.getByText('Footer Content');
    expect(footer).toBeInTheDocument();
  });

  it('can display tooltip', async () => {
    const user = userEvent.setup();

    render(
      <Dialog
        title="Dialog Title"
        tooltip="Dialog Trigger Tooltip"
        trigger={<button type="button">Open Dialog</button>}
      >
        <p>Dialog Content</p>
      </Dialog>,
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Dialog Trigger Tooltip');
  });
});
