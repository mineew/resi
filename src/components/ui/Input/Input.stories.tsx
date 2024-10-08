import type { Meta, StoryFn } from '@storybook/react';

import Input from './Input';

export const Default: StoryFn<typeof Input> = ({
  help,
  label,
  invalid,
  disabled,
  placeholder,
  rightElement,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <Input
        help={help}
        label={label}
        invalid={invalid}
        disabled={disabled}
        placeholder={placeholder}
        rightElement={rightElement}
      />
    </div>
  );
};

export default {
  component: Input,
  title: 'Components/UI/Input',
  argTypes: {
    rightElement: {
      type: 'string',
    },
  },
  args: {
    invalid: false,
    disabled: false,
    label: 'Input Label',
    rightElement: 'right',
    help: 'Input Help Text',
    placeholder: 'Input Placeholder',
  },
} as Meta<typeof Input>;
