import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { CopyCheck, CopyX, Trash2 } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import Dropdown, { type DropdownItem } from './Dropdown';

const fileListExampleItems: (DropdownItem | 'separator')[] = [
  {
    id: 'clear',
    danger: true,
    label: 'Clear',
    icon: <Trash2 />,
    onClick: fn(),
  },
  'separator',
  {
    disabled: true,
    id: 'select-all',
    icon: <CopyCheck />,
    label: 'Select All',
    onClick: fn(),
  },
  {
    icon: <CopyX />,
    id: 'unselect-all',
    label: 'Reset All',
    onClick: fn(),
  },
];

const simpleListExampleItems: DropdownItem[] = [
  {
    id: 'item-1',
    label: 'Item 1',
    onClick: fn(),
  },
  {
    id: 'item-2',
    danger: true,
    label: 'Item 2',
    onClick: fn(),
  },
  {
    id: 'item-3',
    label: 'Item 3',
    onClick: fn(),
  },
];

export const Default: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown
        tooltip="Dropdown Trigger Tooltip"
        trigger={<Button>Dropdown Trigger</Button>}
        items={fileListExampleItems}
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
