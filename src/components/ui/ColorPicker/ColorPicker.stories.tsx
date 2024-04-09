import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import ColorPicker from './ColorPicker';

export const Default: StoryFn<typeof ColorPicker> = () => {
  const [value, setValue] = useState('#000000');

  return (
    <div style={{ padding: 20 }}>
      <ColorPicker value={value} onChange={setValue}>
        <Button style={{ backgroundColor: value, outlineColor: value }}>
          ColorPicker Trigger
        </Button>
      </ColorPicker>
    </div>
  );
};

export default {
  title: 'Components/UI/ColorPicker',
  component: ColorPicker,
} as Meta<typeof ColorPicker>;
