import type { Meta, StoryFn } from '@storybook/react';

import Button from './Button';

export const Default: StoryFn<typeof Button> = ({
  size,
  theme,
  center,
  outlined,
  disabled,
  fullWidth,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Button
        size={size}
        theme={theme}
        center={center}
        outlined={outlined}
        disabled={disabled}
        fullWidth={fullWidth}
      >
        Click me
      </Button>
    </div>
  );
};

export default {
  component: Button,
  title: 'Components/UI/Button',
  argTypes: {
    icon: { table: { disable: true } },
  },
  args: {
    center: false,
    size: 'default',
    outlined: false,
    disabled: false,
    theme: 'primary',
    fullWidth: false,
  },
} as Meta<typeof Button>;
