import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import RadioGroup, { type RadioGroupItem } from './RadioGroup';

const items: RadioGroupItem[] = [
  {
    label: 'Item 1',
    value: 'item-1',
  },
  {
    id: 'item-2',
    label: 'Item 2',
    value: 'item-2',
  },
  {
    label: 'Item 3',
    value: 'item-3',
  },
];

describe('@/components/ui/RadioGroup', () => {
  it('renders', () => {
    const handleValueChange = vi.fn();

    render(
      <RadioGroup
        items={items}
        value="item-2"
        onValueChange={handleValueChange}
      />,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const selectedItem = screen.getByRole('radio', { checked: true });

    expect(radioGroup).toBeInTheDocument();
    expect(selectedItem).toHaveValue('item-2');
  });

  it('can change value', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <RadioGroup
        items={items}
        value="item-2"
        onValueChange={handleValueChange}
      />,
    );

    const item3 = screen.getByLabelText('Item 3');
    await user.click(item3);

    expect(handleValueChange).toHaveBeenCalledTimes(1);
    expect(handleValueChange).toHaveBeenCalledWith('item-3');
  });

  it('can be labeled', () => {
    const handleValueChange = vi.fn();

    render(
      <RadioGroup
        label="Radio Group Label"
        items={items}
        value="item-2"
        onValueChange={handleValueChange}
      />,
    );

    const label = screen.getByText('Radio Group Label');
    expect(label).toBeInTheDocument();
  });
});
