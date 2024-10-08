import type { Meta, StoryFn } from '@storybook/react';

import Loader from './Loader';

export const Default: StoryFn<typeof Loader> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Loader />
    </div>
  );
};

export default {
  component: Loader,
  title: 'Components/UI/Loader',
} as Meta<typeof Loader>;
