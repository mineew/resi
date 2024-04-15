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

const diffs: RESIFileDiff[] = [
  {
    fileA: files[1],
    fileB: files[0],
    diff: 12.2314343224234,
  },
  {
    fileA: files[2],
    fileB: files[1],
    diff: -5.6781317234,
  },
  {
    fileA: files[3],
    fileB: files[2],
    diff: 10,
  },
];

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
