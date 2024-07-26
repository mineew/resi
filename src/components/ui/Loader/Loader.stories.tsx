import { type Meta, type StoryFn } from '@storybook/react';

import Loader from './Loader';

export const Default: StoryFn<typeof Loader> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Loader />
    </div>
  );
};

export default {
  title: 'Components/UI/Loader',
  component: Loader,
} as Meta<typeof Loader>;
