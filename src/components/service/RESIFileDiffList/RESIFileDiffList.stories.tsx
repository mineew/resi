import { type Meta, type StoryFn } from '@storybook/react';

import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import RESIFileDiffList from './RESIFileDiffList';

const files: RESIFile[] = [
  {
    name: 'File-1',
    checked: true,
    color: '#000000',
    strokeWidth: 1,
    contents: [1, 2, 3],
  },
  {
    name: 'File-2',
    checked: true,
    color: '#FF0000',
    strokeWidth: 1,
    contents: [4, 5, 6],
  },
  {
    name: 'File-3',
    checked: true,
    color: '#0000FF',
    strokeWidth: 1,
    contents: [7, 8, 9],
  },
  {
    name: 'File-4',
    checked: true,
    color: '#FF00FF',
    strokeWidth: 1,
    contents: [10, 11, 12],
  },
];

const diff1: RESIFileDiff = {
  fileA: files[1],
  fileB: files[0],
  diff: 12.2314343224234,
  totalDiff: 12.2314343224234,
  distance: 345.123433,
  totalDistance: 345.123433,
};

const diff2: RESIFileDiff = {
  fileA: files[2],
  fileB: files[1],
  diff: -5.6781317234,
  totalDiff: diff1.diff + -5.6781317234,
  distance: 653.12343,
  totalDistance: diff1.distance + 653.12343,
};

const diff3: RESIFileDiff = {
  fileA: files[3],
  fileB: files[2],
  diff: 10,
  totalDiff: diff2.diff + 10,
  distance: 987.892813233,
  totalDistance: diff2.distance + 987.892813233,
};

const diffs: RESIFileDiff[] = [diff1, diff2, diff3];

export const Default: StoryFn<typeof RESIFileDiffList> = () => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <RESIFileDiffList diffs={diffs} />
    </div>
  );
};

export default {
  title: 'Components/Service/RESIFileDiffList',
  component: RESIFileDiffList,
  argTypes: {
    diffs: { table: { disable: true } },
  },
} as Meta<typeof RESIFileDiffList>;
