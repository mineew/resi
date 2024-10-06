import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import InputNumber from './InputNumber';

export const Default: StoryFn<typeof InputNumber> = ({
  min,
  max,
  help,
  label,
  invalid,
  placeholder,
}) => {
  const [typedValue, setTypedValue] = useState(1500);

  const handleValueChange = (newTypedValue: number) => {
    setTypedValue(newTypedValue);
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <InputNumber
        min={min}
        max={max}
        help={help}
        label={label}
        invalid={invalid}
        typedValue={typedValue}
        placeholder={placeholder}
        onValueChange={handleValueChange}
      />
    </div>
  );
};

export default {
  component: InputNumber,
  title: 'Components/UI/InputNumber',
  args: {
    min: 10,
    max: 35700,
    invalid: false,
    label: 'Number',
    help: 'only numbers',
    placeholder: 'Placeholder',
  },
  argTypes: {
    typedValue: { table: { disable: true } },
    rightElement: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
  },
} as Meta<typeof InputNumber>;
