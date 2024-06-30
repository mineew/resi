import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Checkbox from './Checkbox';

describe('@/components/ui/Checkbox', () => {
  it('renders', () => {
    const handleCheckedChange = vi.fn();

    render(
      <Checkbox
        label="Checkbox Label"
        checked={false}
        onCheckedChange={handleCheckedChange}
      />,
    );

    const byRole = screen.getByRole('checkbox');
    expect(byRole).toBeInTheDocument();

    const byLabelText = screen.getByLabelText('Checkbox Label');
    expect(byLabelText).toBeInTheDocument();
  });

  it('can be checked', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <Checkbox
        label="Checkbox Label"
        checked={false}
        onCheckedChange={handleCheckedChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
