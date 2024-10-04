import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Input from './Input';

describe('@/components/ui/Input', () => {
  it('renders', () => {
    render(<Input placeholder="Type Something..." />);

    const byRole = screen.getByRole('textbox');
    expect(byRole).toBeInTheDocument();

    const byPlaceholderText = screen.getByPlaceholderText('Type Something...');
    expect(byPlaceholderText).toBeInTheDocument();
  });

  it('can be typed', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const value = 'Hello World!';

    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');

    await user.type(input, value);

    expect(input).toHaveValue(value);
    expect(handleChange).toHaveBeenCalledTimes(value.length);
  });

  it('can be disbled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const value = 'Hello World!';

    render(<Input onChange={handleChange} disabled />);

    const input = screen.getByRole('textbox');

    await user.type(input, value);

    expect(input).toBeDisabled();
    expect(input).toHaveValue('');
    expect(handleChange).toHaveBeenCalledTimes(0);
  });

  it('can be labeled', () => {
    render(<Input label="Input Label" />);
    const input = screen.getByLabelText('Input Label');

    expect(input).toBeInTheDocument();
  });

  it('can display help text', () => {
    render(<Input help="Help Text" />);
    const element = screen.getByText('Help Text');

    expect(element).toBeInTheDocument();
  });

  it('can display custom elements', () => {
    render(<Input rightElement={<button type="button">Click Me</button>} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
