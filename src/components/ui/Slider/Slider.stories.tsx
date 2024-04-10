import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Slider from './Slider';

export const Default: StoryFn<typeof Slider> = () => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 20, width: 400 }}>
      <Slider value={value} onValueChange={setValue} />
    </div>
  );
};

export default {
  title: 'Components/UI/Slider',
  component: Slider,
} as Meta<typeof Slider>;
