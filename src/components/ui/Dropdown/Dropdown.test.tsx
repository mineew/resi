import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Dropdown, { type DropdownItem } from './Dropdown';

const items: ('separator' | DropdownItem)[] = [
  {
    id: 'item-1',
    label: 'Item 1',
    onClick: vi.fn(),
  },
  {
    id: 'item-2',
    label: 'Item 2',
    onClick: vi.fn(),
  },
  'separator',
  {
    id: 'item-3',
    label: 'Item 3',
    onClick: vi.fn(),
  },
];

const isDropdownItem = (
  item: 'separator' | DropdownItem,
): item is DropdownItem => {
  return item !== 'separator';
};

describe('@/components/ui/Dropdown', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} />);

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toBeInTheDocument();
    expect(menuItems[1]).toBeInTheDocument();
    expect(menuItems[2]).toBeInTheDocument();

    const separator = screen.getByRole('separator');
    expect(separator).toBeInTheDocument();
  });

  it('can click on items', async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} />);

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const item2 = screen.getByRole('menuitem', { name: 'Item 2' });
    await user.click(item2);

    const item2Data = items.filter(isDropdownItem)[1];
    expect(item2Data.onClick).toHaveBeenCalledTimes(1);
  });

  it('can render a tooltip', async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} tooltip="Tooltip Content" />);

    const trigger = screen.getByRole('button');
    await user.hover(trigger);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  it('can be closed by ESC', async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} tooltip="Tooltip Content" />);

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    await user.keyboard('{Escape}');

    const closed = screen.queryByRole('menu');
    expect(closed).not.toBeInTheDocument();
  });
});
