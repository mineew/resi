import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import LangDropdown from './LangDropdown';

describe('@/components/service/app-settings/LangDropdown', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    const handleChangeSelectedLang = vi.fn();

    render(
      <LangDropdown
        langs={[
          { id: 'en', label: 'English' },
          { id: 'ru', label: 'Русский' },
        ]}
        selectedLang="en"
        onChangeSelectedLang={handleChangeSelectedLang}
      />,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
  });

  it('can change current language', async () => {
    const user = userEvent.setup();
    const handleChangeSelectedLang = vi.fn();

    render(
      <LangDropdown
        langs={[
          { id: 'en', label: 'English' },
          { id: 'ru', label: 'Русский' },
        ]}
        selectedLang="en"
        onChangeSelectedLang={handleChangeSelectedLang}
      />,
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const menuItems = screen.getAllByRole('menuitem');
    await user.click(menuItems[1]);

    expect(handleChangeSelectedLang).toHaveBeenCalledTimes(1);
    expect(handleChangeSelectedLang).toHaveBeenCalledWith('ru');
  });
});
