import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import AppSettings from './AppSettings';

describe('@/components/service/app-settings/AppSettings', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <AppSettings onChange={handleChange}>
        <button type="button">Open App Settings</button>
      </AppSettings>,
    );

    const trigger = screen.getByRole('button', { name: 'Open App Settings' });
    await user.click(trigger);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('can change form values', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <AppSettings onChange={handleChange}>
        <button type="button">Open App Settings</button>
      </AppSettings>,
    );

    const trigger = screen.getByRole('button', { name: 'Open App Settings' });
    await user.click(trigger);

    const submit = screen.getByRole('button', {
      name: 'APP_SETTINGS.SUBMIT_BUTTON',
    });
    await user.click(submit);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
