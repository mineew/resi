import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import Checkbox from './Checkbox';

export const Default: StoryFn<typeof Checkbox> = ({ size, label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        size={size}
        label={label}
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
};

export default {
  component: Checkbox,
  title: 'Components/UI/Checkbox',
  args: {
    size: 'default',
    label: 'Checkbox Label',
  },
  argTypes: {
    id: { table: { disable: true } },
    checked: { table: { disable: true } },
    hasBoldLabel: { table: { disable: true } },
    onCheckedChange: { table: { disable: true } },
  },
} as Meta<typeof Checkbox>;
