import { action } from '@storybook/addon-actions';
import { type Meta, type StoryFn } from '@storybook/react';
import { CopyCheck, CopyX, Trash2 } from 'lucide-react';

import Button from '@/components/ui/Button/Button';

import Dropdown, { type DropdownItem } from './Dropdown';

const items: Array<DropdownItem | 'separator'> = [
  {
    id: 'clear',
    icon: <Trash2 />,
    label: 'Clear',
    onClick: action('clear'),
    danger: true,
  },
  'separator',
  {
    id: 'select-all',
    icon: <CopyCheck />,
    label: 'Select All',
    onClick: action('select-all'),
    disabled: true,
  },
  {
    id: 'unselect-all',
    icon: <CopyX />,
    label: 'Reset All',
    onClick: action('unselect-all'),
  },
];

export const Default: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown trigger={<Button>Dropdown Trigger</Button>} items={items} />
    </div>
  );
};

export const DefaultTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown items={items} />
    </div>
  );
};

export default {
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: { table: { disable: true } },
    items: { table: { disable: true } },
  },
} as Meta<typeof Dropdown>;
