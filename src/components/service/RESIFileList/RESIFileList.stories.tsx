import { type Meta, type StoryFn } from '@storybook/react';

import { type RESIFile } from '@/store/RESIFile';

import RESIFileList from './RESIFileList';

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
    checked: false,
    color: '#FF0000',
    strokeWidth: 2,
    contents: [4, 5, 6],
  },
  {
    name: 'File-3',
    checked: true,
    color: '#0000FF',
    strokeWidth: 3,
    contents: [7, 8, 9],
  },
];

export const Default: StoryFn<typeof RESIFileList> = ({
  onChangeFileColor,
  onChangeFileStrokeWidth,
  onChangeFileChecked,
  onDeleteFile,
}) => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <RESIFileList
        files={files}
        onChangeFileColor={onChangeFileColor}
        onChangeFileStrokeWidth={onChangeFileStrokeWidth}
        onChangeFileChecked={onChangeFileChecked}
        onDeleteFile={onDeleteFile}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/RESIFileList',
  component: RESIFileList,
  argTypes: {
    files: { table: { disable: true } },
    onChangeFileColor: { table: { disable: true } },
    onChangeFileStrokeWidth: { table: { disable: true } },
    onChangeFileChecked: { table: { disable: true } },
    onDeleteFile: { table: { disable: true } },
  },
} as Meta<typeof RESIFileList>;
