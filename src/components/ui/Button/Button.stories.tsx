import { type Meta, type StoryFn } from '@storybook/react';

import Button from './Button';

export const Default: StoryFn<typeof Button> = ({
  theme,
  size,
  fullWidth,
  center,
  outlined,
  disabled,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Button
        theme={theme}
        size={size}
        fullWidth={fullWidth}
        center={center}
        outlined={outlined}
        disabled={disabled}
      >
        Click me
      </Button>
    </div>
  );
};

export default {
  title: 'Components/UI/Button',
  component: Button,
  args: {
    theme: 'primary',
    size: 'default',
    fullWidth: false,
    center: false,
    outlined: false,
    disabled: false,
  },
  argTypes: {
    icon: { table: { disable: true } },
  },
} as Meta<typeof Button>;
