import type { Meta, StoryFn } from '@storybook/react';

import ScrollArea from './ScrollArea';

export const Default: StoryFn<typeof ScrollArea> = () => {
  const items = new Array(100).fill(null).map((_, i) => `Item ${i + 1}`);

  return (
    <div
      style={{
        padding: 20,
        height: '100vh',
        width: 300,
      }}
    >
      <ScrollArea
        style={{
          height: '100%',
          border: '1px solid var(--slate-6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: 10,
                borderRadius: 10,
                width: '120%',
                backgroundColor: 'var(--slate-3)',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default {
  title: 'Components/UI/ScrollArea',
  component: ScrollArea,
} as Meta<typeof ScrollArea>;
