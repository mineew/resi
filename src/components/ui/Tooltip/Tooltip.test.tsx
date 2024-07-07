import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Tooltip from './Tooltip';

describe('@/components/ui/Tooltip', () => {
  it('renders', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip title="Tooltip Content">
        <button type="button">Tooltip Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button');
    await user.hover(trigger);

    const tooltip = screen.getByRole('tooltip', { name: 'Tooltip Content' });
    expect(tooltip).toBeInTheDocument();
  });
});
