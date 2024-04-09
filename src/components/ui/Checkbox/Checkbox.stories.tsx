import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Checkbox from './Checkbox';

export const Default: StoryFn<typeof Checkbox> = ({ label, size }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label={label}
        checked={checked}
        onCheckedChange={setChecked}
        size={size}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox Label',
    size: 'default',
  },
} as Meta<typeof Checkbox>;
