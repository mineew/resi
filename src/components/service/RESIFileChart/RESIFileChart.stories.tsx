import { type Meta, type StoryFn } from '@storybook/react';

import { type RESIFile } from '@/store/types/RESIFile';
import getRandomInt from '@/utils/misc/getRandomInt';

import RESIFileChart from './RESIFileChart';

const files: RESIFile[] = [
  {
    name: 'File-1',
    color: '#FF0000',
    strokeWidth: 1,
    checked: true,
    contents: new Array(10).fill(null).map(() => getRandomInt(0, 200)),
  },
  {
    name: 'File-2',
    color: '#00FF00',
    strokeWidth: 1,
    checked: true,
    contents: new Array(10).fill(null).map(() => getRandomInt(0, 300)),
  },
  {
    name: 'File-3',
    color: '#0000FF',
    strokeWidth: 1,
    checked: true,
    contents: new Array(10).fill(null).map(() => getRandomInt(0, 400)),
  },
];

export const Default: StoryFn<typeof RESIFileChart> = () => {
  return (
    <div style={{ padding: 20, height: '100vh' }}>
      <RESIFileChart files={files} />
    </div>
  );
};

export default {
  title: 'Components/Service/RESIFileChart',
  component: RESIFileChart,
  argTypes: {
    files: { table: { disable: true } },
    scale: { table: { disable: true } },
  },
} as Meta<typeof RESIFileChart>;
