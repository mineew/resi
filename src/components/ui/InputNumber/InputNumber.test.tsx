import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import InputNumber from './InputNumber';

const mocks = vi.hoisted(() => ({
  useTranslation: vi.fn(() => ({
    i18n: { language: 'en' },
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: mocks.useTranslation,
}));

describe('@/components/ui/InputNumber', () => {
  it('renders', () => {
    render(<InputNumber />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
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
    mocks.useTranslation.mockReturnValue({
      i18n: { language: 'en' },
    });

    render(<InputNumber typedValue={1500} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,500');
  });

  it('displays the thousands separator in RU locale', () => {
    mocks.useTranslation.mockReturnValue({
      i18n: { language: 'ru' },
    });

    render(<InputNumber typedValue={1500} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1 500');
  });
});
