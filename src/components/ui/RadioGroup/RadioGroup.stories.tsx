import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import RadioGroup, { type RadioGroupItem } from './RadioGroup';

export const Default: StoryFn<typeof RadioGroup> = ({ label, size }) => {
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
        label={label}
        items={items}
        value={value}
        onValueChange={setValue}
        size={size}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  argTypes: {
    items: { table: { disable: true } },
    value: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
  },
  args: {
    label: 'Threshold',
    size: 'default',
  },
} as Meta<typeof RadioGroup>;
