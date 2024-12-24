import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Button from './Button';

describe('@/components/ui/Button', () => {
  it('renders', () => {
    render(<Button>Button Text</Button>);

    const button = screen.getByRole('button', { name: 'Button Text' });
    expect(button).toBeInTheDocument();
  });

  it('can be clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(button).toBeDisabled();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
