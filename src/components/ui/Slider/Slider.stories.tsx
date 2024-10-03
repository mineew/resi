import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import Slider from './Slider';

export const Default: StoryFn<typeof Slider> = ({
  label,
  hasBoldLabel,
  shouldDisplayValue,
  size,
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
  title: 'Components/UI/Slider',
  component: Slider,
  argTypes: {
    id: { table: { disable: true } },
    value: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    valueFormatter: { table: { disable: true } },
    min: { table: { disable: true } },
    max: { table: { disable: true } },
    step: { table: { disable: true } },
  },
  args: {
    label: 'Change Stroke Width',
    hasBoldLabel: false,
    shouldDisplayValue: true,
    size: 'default',
  },
} as Meta<typeof Slider>;
