import type { Meta, StoryFn } from '@storybook/react';
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
        strokeWidth={strokeWidth}
        onChangeColor={setColor}
        onChangeStrokeWidth={setStrokeWidth}
      >
        <Button
          style={{
            outlineColor: color,
            backgroundColor: color,
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
  component: RESIFileSettings,
  title: 'Components/Service/RESI File List/RESIFileSettings',
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
    strokeWidth: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    onChangeColor: { table: { disable: true } },
    onChangeStrokeWidth: { table: { disable: true } },
  },
} as Meta<typeof RESIFileSettings>;
