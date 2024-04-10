import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Slider from './Slider';

export const Default: StoryFn<typeof Slider> = ({ size }) => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 20, width: 400 }}>
      <Slider
        label="Change Stroke Width"
        value={value}
        onValueChange={setValue}
        size={size}
      />
    </div>
  );
};

export default {
  title: 'Components/UI/Slider',
  component: Slider,
  args: {
    size: 'default',
  },
} as Meta<typeof Slider>;
