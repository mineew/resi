import { type Meta, type StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { CopyCheck, CopyX, Trash2 } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import Dropdown, { type DropdownItem } from './Dropdown';

const items: Array<DropdownItem | 'separator'> = [
  {
    id: 'clear',
    icon: <Trash2 />,
    label: 'Clear',
    onClick: fn(),
    danger: true,
  },
  'separator',
  {
    id: 'select-all',
    icon: <CopyCheck />,
    label: 'Select All',
    onClick: fn(),
    disabled: true,
  },
  {
    id: 'unselect-all',
    icon: <CopyX />,
    label: 'Reset All',
    onClick: fn(),
  },
];

export const Default: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown
        tooltip="Dropdown Trigger Tooltip"
        trigger={<Button>Dropdown Trigger</Button>}
        items={items}
      />
    </div>
  );
};

export const DefaultTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown tooltip="More Options" items={items} />
    </div>
  );
};

export const SelectedItem: StoryFn<typeof Dropdown> = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');

  const items: DropdownItem[] = [
    {
      id: 'item-1',
      label: 'Item 1',
      onClick: () => setSelectedItem('item-1'),
      selected: selectedItem === 'item-1',
    },
    {
      id: 'item-2',
      label: 'Item 2',
      onClick: () => setSelectedItem('item-2'),
      selected: selectedItem === 'item-2',
      danger: true,
    },
    {
      id: 'item-3',
      label: 'Item 3',
      onClick: () => setSelectedItem('item-3'),
      selected: selectedItem === 'item-3',
    },
  ];

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
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  argTypes: {
    items: { table: { disable: true } },
    defaultTriggerClassName: { table: { disable: true } },
    defaultTriggerTitle: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    trigger: { table: { disable: true } },
    align: { table: { disable: true } },
    fullWidthContent: { table: { disable: true } },
  },
} as Meta<typeof Dropdown>;
