import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import RadioGroup, { type RadioGroupItem } from './RadioGroup';

export const Default: StoryFn<typeof RadioGroup> = ({ size, label }) => {
  const [value, setValue] = useState('mean');

  const items: RadioGroupItem[] = [
    {
      value: 'mean',
      label: 'Mean',
    },
    {
      value: 'median',
      label: 'Median',
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <RadioGroup
        size={size}
        label={label}
        items={items}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

export default {
  component: RadioGroup,
  title: 'Components/UI/RadioGroup',
  args: {
    size: 'default',
    label: 'Threshold',
  },
  argTypes: {
    items: { table: { disable: true } },
    value: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
  },
} as Meta<typeof RadioGroup>;
