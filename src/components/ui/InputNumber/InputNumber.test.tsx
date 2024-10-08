import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { commonMocks } from '~/vitest.mocks.hoisted';

import InputNumber from './InputNumber';

describe('@/components/ui/InputNumber', () => {
  it('renders', () => {
    render(<InputNumber />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('can change value', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<InputNumber onValueChange={handleValueChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, '12 3');

    expect(handleValueChange).toHaveBeenCalledTimes(3);
    expect(handleValueChange).toHaveBeenLastCalledWith(123, '123');
  });

  it('accepts only numbers', async () => {
    const user = userEvent.setup();
    render(<InputNumber />);

    const input = screen.getByRole('textbox');
    await user.type(input, '1Hello2,3');

    const byDisplayValue = screen.getByDisplayValue('123');
    expect(byDisplayValue).toBeInTheDocument();
  });

  it('displays the thousands separator in EN locale', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    render(<InputNumber typedValue={1500} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,500');
  });

  it('displays the thousands separator in RU locale', () => {
    commonMocks.useTranslation.mockReturnValue({
      i18n: { language: 'ru' },
    });

    render(<InputNumber typedValue={1500} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1 500');
  });
});
