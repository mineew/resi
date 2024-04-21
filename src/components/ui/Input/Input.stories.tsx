import { type Meta, type StoryFn } from '@storybook/react';

import Input from './Input';

export const Default: StoryFn<typeof Input> = ({
  label,
  placeholder,
  disabled,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Input label={label} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export default {
  title: 'Components/UI/Input',
  component: Input,
  args: {
    label: 'Input Label',
    placeholder: 'Input Placeholder',
    disabled: false,
  },
} as Meta<typeof Input>;
