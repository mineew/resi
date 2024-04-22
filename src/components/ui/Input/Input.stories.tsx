import { type Meta, type StoryFn } from '@storybook/react';

import Input from './Input';

export const Default: StoryFn<typeof Input> = ({
  label,
  placeholder,
  rightElement,
  disabled,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <Input
        label={label}
        placeholder={placeholder}
        rightElement={rightElement}
        disabled={disabled}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/Input',
  component: Input,
  argTypes: {
    rightElement: {
      type: 'string',
    },
  },
  args: {
    label: 'Input Label',
    placeholder: 'Input Placeholder',
    rightElement: 'right',
    disabled: false,
  },
} as Meta<typeof Input>;
