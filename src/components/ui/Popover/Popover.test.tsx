import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Popover from './Popover';

describe('@/components/ui/Popover', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Popover
        trigger={<button type="button">Popover Trigger</button>}
        onOpenChange={handleOpenChange}
      >
        <p>Popover Content</p>
      </Popover>,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const dialog = screen.getByRole('dialog');
    const content = screen.getByText('Popover Content');

    expect(dialog).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
