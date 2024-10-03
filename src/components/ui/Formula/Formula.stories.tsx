import type { Meta, StoryFn } from '@storybook/react';

import Formula from './Formula';

export const Default: StoryFn<typeof Formula> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Formula a={0} b={0} />

      <div style={{ marginBottom: 20 }}>
        <Formula a={12} b={0} />
        <Formula a={-12} b={0} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Formula a={5} b={12} />
        <Formula a={-5} b={12} />
        <Formula a={5} b={-12} />
        <Formula a={-5} b={-12} />
      </div>

      <div>
        <Formula a={0} b={12} />
        <Formula a={0} b={-12} />
      </div>
    </div>
  );
};

export default {
  component: Formula,
  title: 'Components/UI/Formula',
  argTypes: {
    a: { table: { disable: true } },
    b: { table: { disable: true } },
  },
} as Meta<typeof Formula>;
