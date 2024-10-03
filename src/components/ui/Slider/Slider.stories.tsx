import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import Slider from './Slider';

export const Default: StoryFn<typeof Slider> = ({
  size,
  label,
  hasBoldLabel,
  shouldDisplayValue,
}) => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <Slider
        label={label}
        hasBoldLabel={hasBoldLabel}
        value={value}
        onValueChange={setValue}
        shouldDisplayValue={shouldDisplayValue}
        size={size}
      />
    </div>
  );
};

export default {
  component: Slider,
  title: 'Components/UI/Slider',
  args: {
    size: 'default',
    hasBoldLabel: false,
    shouldDisplayValue: true,
    label: 'Change Stroke Width',
  },
  argTypes: {
    id: { table: { disable: true } },
    min: { table: { disable: true } },
    max: { table: { disable: true } },
    step: { table: { disable: true } },
    value: { table: { disable: true } },
    valueFormatter: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
  },
} as Meta<typeof Slider>;
