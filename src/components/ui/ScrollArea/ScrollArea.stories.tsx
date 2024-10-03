import type { Meta, StoryFn } from '@storybook/react';

import ScrollArea from './ScrollArea';

export const Default: StoryFn<typeof ScrollArea> = () => {
  const items = new Array(100).fill(null).map((_, i) => `Item ${i + 1}`);

  return (
    <div
      style={{
        width: 300,
        padding: 20,
        height: '100vh',
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
            gap: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {items.map((item) => (
            <div
              style={{
                padding: 10,
                width: '120%',
                borderRadius: 10,
                backgroundColor: 'var(--slate-3)',
              }}
              key={item}
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
  component: ScrollArea,
  title: 'Components/UI/ScrollArea',
} as Meta<typeof ScrollArea>;
