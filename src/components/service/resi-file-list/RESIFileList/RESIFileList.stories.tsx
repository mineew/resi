import { type Meta, type StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { type RESIFile } from '@/store/types/RESIFile';
import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';

import RESIFileList from './RESIFileList';

const files: RESIFile[] = getRandomArray(
  (idx) => createRandomRESIFile(`File-${idx + 1}`),
  5,
);

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
  title: 'Components/Service/RESI File List/RESIFileList',
  component: RESIFileList,
  argTypes: {
    files: { table: { disable: true } },
    onChangeFileColor: { table: { disable: true } },
    onChangeFileStrokeWidth: { table: { disable: true } },
    onChangeFileChecked: { table: { disable: true } },
    onDeleteFile: { table: { disable: true } },
  },
  args: {
    onChangeFileColor: fn(),
    onChangeFileStrokeWidth: fn(),
    onChangeFileChecked: fn(),
    onDeleteFile: fn(),
  },
} as Meta<typeof RESIFileList>;
