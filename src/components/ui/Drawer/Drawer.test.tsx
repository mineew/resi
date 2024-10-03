import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Drawer from './Drawer';

describe('@/components/ui/Drawer', () => {
  it('renders', async () => {
    const user = userEvent.setup();

    render(
      <Drawer
        title="Drawer Title"
        trigger={<button type="button">Open Drawer</button>}
      >
        <p>Drawer Content</p>
      </Drawer>,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });

  it('can be closed', async () => {
    const user = userEvent.setup();

    render(
      <Drawer
        title="Drawer Title"
        tooltip="Drawer Trigger Tooltip"
        trigger={<button type="button">Open Drawer</button>}
      >
        <p>Drawer Content</p>
      </Drawer>,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);

    const drawer = screen.queryByRole('dialog');
    expect(drawer).not.toBeInTheDocument();
  });

  it('can display tooltip', async () => {
    const user = userEvent.setup();

    render(
      <Drawer
        title="Drawer Title"
        tooltip="Drawer Trigger Tooltip"
        trigger={<button type="button">Open Drawer</button>}
      >
        <p>Drawer Content</p>
      </Drawer>,
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Drawer Trigger Tooltip');
  });
});
