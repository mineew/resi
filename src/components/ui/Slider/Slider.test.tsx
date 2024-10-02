import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Slider from './Slider';

describe('@/components/ui/Slider', () => {
  it('renders', () => {
    const value = 5;
    const handleValueChange = vi.fn();

    render(<Slider value={value} onValueChange={handleValueChange} />);

    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });

  it('can be labeled', () => {
    const value = 5;
    const handleValueChange = vi.fn();

    render(
      <Slider
        label="Slider Label"
        value={value}
        onValueChange={handleValueChange}
      />,
    );

    const slider = screen.getByLabelText('Slider Label');
    expect(slider).toBeInTheDocument();
  });

  it('can display current value', () => {
    const value = 25;
    const handleValueChange = vi.fn();

    render(
      <Slider
        value={value}
        onValueChange={handleValueChange}
        valueFormatter={(newValue) => `Current Value: ${newValue}`}
      />,
    );

    const valueElement = screen.getByText(`Current Value: ${value}`);
    expect(valueElement).toBeInTheDocument();
  });

  it('can change current value', async () => {
    const user = userEvent.setup();
    const value = 25;
    const handleValueChange = vi.fn();

    render(
      <Slider
        label="Slider Label"
        value={value}
        onValueChange={handleValueChange}
        valueFormatter={(newValue) => `Current Value: ${newValue}`}
      />,
    );

    const label = screen.getByText('Slider Label');
    await user.click(label);
    await user.keyboard('{ArrowRight}');

    expect(handleValueChange).toHaveBeenCalledTimes(1);
  });
});
