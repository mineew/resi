import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ThemeButton from './ThemeButton';

describe('@/components/service/app-settings/ThemeButton', () => {
  it('renders', () => {
    const handleToggleTheme = vi.fn();

    render(<ThemeButton theme="light" onToggleTheme={handleToggleTheme} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('can toggle theme', async () => {
    const handleToggleTheme = vi.fn();
    const user = userEvent.setup();

    render(<ThemeButton theme="light" onToggleTheme={handleToggleTheme} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('can render the tooltip', async () => {
    const handleToggleTheme = vi.fn();
    const user = userEvent.setup();

    const { rerender } = render(
      <ThemeButton theme="light" onToggleTheme={handleToggleTheme} />,
    );
    const lightButton = screen.getByRole('button');
    await user.hover(lightButton);

    const darkTooltip = screen.getByRole('tooltip', {
      name: 'THEME.ENABLE_DARK_THEME',
    });
    expect(darkTooltip).toBeInTheDocument();

    rerender(<ThemeButton theme="dark" onToggleTheme={handleToggleTheme} />);
    const darkButton = screen.getByRole('button');
    await user.hover(darkButton);

    const lightTooltip = screen.getByRole('tooltip', {
      name: 'THEME.ENABLE_LIGHT_THEME',
    });
    expect(lightTooltip).toBeInTheDocument();
  });
});
