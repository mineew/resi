import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import type { RESIFile } from '@/store/types/RESIFile';
import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';

import RESIFileList from './RESIFileList';

const files: RESIFile[] = getRandomArray(
  (idx) => createRandomRESIFile(`File-${idx + 1}`),
  5,
);

export const Default: StoryFn<typeof RESIFileList> = ({
  onDeleteFile,
  onChangeFileColor,
  onChangeFileChecked,
  onChangeFileStrokeWidth,
}) => {
  return (
    <div style={{ width: 400, padding: 20 }}>
      <RESIFileList
        files={files}
        onDeleteFile={onDeleteFile}
        onChangeFileColor={onChangeFileColor}
        onChangeFileChecked={onChangeFileChecked}
        onChangeFileStrokeWidth={onChangeFileStrokeWidth}
      />
    </div>
  );
};

export default {
  component: RESIFileList,
  title: 'Components/Service/RESI File List/RESIFileList',
  args: {
    onDeleteFile: fn(),
    onChangeFileColor: fn(),
    onChangeFileChecked: fn(),
    onChangeFileStrokeWidth: fn(),
  },
  argTypes: {
    files: { table: { disable: true } },
    onDeleteFile: { table: { disable: true } },
    onChangeFileColor: { table: { disable: true } },
    onChangeFileChecked: { table: { disable: true } },
    onChangeFileStrokeWidth: { table: { disable: true } },
  },
} as Meta<typeof RESIFileList>;
