import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import InputNumber from './InputNumber';

export const Default: StoryFn<typeof InputNumber> = ({
  label,
  placeholder,
  min,
  max,
  help,
  invalid,
}) => {
  const [typedValue, setTypedValue] = useState(1500);
  const [, setUnmaskedValue] = useState('1500');

  const handleValueChange = (newTypedValue: number, unmaskedValue: string) => {
    setTypedValue(newTypedValue);
    setUnmaskedValue(unmaskedValue);
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <InputNumber
        label={label}
        placeholder={placeholder}
        typedValue={typedValue}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        help={help}
        invalid={invalid}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/InputNumber',
  component: InputNumber,
  argTypes: {
    typedValue: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    rightElement: { table: { disable: true } },
  },
  args: {
    label: 'Number',
    placeholder: 'Placeholder',
    min: 10,
    max: 35700,
    help: 'only numbers',
    invalid: false,
  },
} as Meta<typeof InputNumber>;
