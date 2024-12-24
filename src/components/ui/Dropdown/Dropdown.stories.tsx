import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { CopyCheck, CopyX, Trash2 } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import Dropdown, { type DropdownItem } from './Dropdown';

const fileListExampleItems: ('separator' | DropdownItem)[] = [
  {
    id: 'clear',
    danger: true,
    onClick: fn(),
    label: 'Clear',
    icon: <Trash2 />,
  },
  'separator',
  {
    onClick: fn(),
    disabled: true,
    id: 'select-all',
    icon: <CopyCheck />,
    label: 'Select All',
  },
  {
    onClick: fn(),
    icon: <CopyX />,
    id: 'unselect-all',
    label: 'Reset All',
  },
];

const simpleListExampleItems: DropdownItem[] = [
  {
    id: 'item-1',
    onClick: fn(),
    label: 'Item 1',
  },
  {
    id: 'item-2',
    danger: true,
    onClick: fn(),
    label: 'Item 2',
  },
  {
    id: 'item-3',
    onClick: fn(),
    label: 'Item 3',
  },
];

export const Default: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown
        items={fileListExampleItems}
        tooltip="Dropdown Trigger Tooltip"
        trigger={<Button>Dropdown Trigger</Button>}
      />
    </div>
  );
};

export const DefaultTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown tooltip="More Options" items={fileListExampleItems} />
    </div>
  );
};

export const SelectedItem: StoryFn<typeof Dropdown> = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');

  const items = simpleListExampleItems.map((item) => ({
    ...item,
    selected: selectedItem === item.id,
    onClick: () => {
      setSelectedItem(item.id);
    },
  }));

  return (
    <div style={{ padding: 20 }}>
      <Dropdown
        items={items}
        defaultTriggerTitle={items.find((i) => i.selected)?.label}
      />
    </div>
  );
};

export default {
  component: Dropdown,
  title: 'Components/UI/Dropdown',
  argTypes: {
    items: { table: { disable: true } },
    align: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    trigger: { table: { disable: true } },
    fullWidthContent: { table: { disable: true } },
    defaultTriggerTitle: { table: { disable: true } },
    defaultTriggerClassName: { table: { disable: true } },
  },
} as Meta<typeof Dropdown>;
