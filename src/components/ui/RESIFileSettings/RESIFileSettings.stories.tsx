import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

import RESIFileSettings from './RESIFileSettings';

export const Default: StoryFn<typeof RESIFileSettings> = () => {
  const [color, setColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(2);

  return (
    <div style={{ padding: 20 }}>
      <RESIFileSettings
        color={color}
        onChangeColor={setColor}
        strokeWidth={strokeWidth}
        onChangeStrokeWidth={setStrokeWidth}
      >
        <Button
          style={{
            backgroundColor: color,
            outlineColor: color,
            outlineWidth: strokeWidth,
          }}
        >
          RESIFileSettings Trigger
        </Button>
      </RESIFileSettings>
    </div>
  );
};

export default {
  title: 'Components/UI/RESIFileSettings',
  component: RESIFileSettings,
} as Meta<typeof RESIFileSettings>;
