import { type Meta, type StoryFn } from '@storybook/react';

import { type RESIFile } from '@/store/types/RESIFile';
import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';

import RESIFileListPanel from './RESIFileListPanel';

const files: RESIFile[] = getRandomArray((idx) =>
  createRandomRESIFile(`File-${idx + 1}`),
);

export const Default: StoryFn<typeof RESIFileListPanel> = ({
  onAddFiles,
  onDeleteAllFiles,
  onSelectAllFiles,
  onUnselectAllFiles,
  onChangeFileColor,
  onChangeFileStrokeWidth,
  onChangeFileChecked,
  onDeleteFile,
}) => {
  return (
    <div
      style={{
        margin: 20,
        height: 'calc(100vh - 40px)',
        width: 300,
        backgroundColor: 'var(--slate-2)',
        border: '1px solid var(--slate-6)',
      }}
    >
      <RESIFileListPanel
        files={files}
        onAddFiles={onAddFiles}
        onDeleteAllFiles={onDeleteAllFiles}
        onSelectAllFiles={onSelectAllFiles}
        onUnselectAllFiles={onUnselectAllFiles}
        onChangeFileColor={onChangeFileColor}
        onChangeFileStrokeWidth={onChangeFileStrokeWidth}
        onChangeFileChecked={onChangeFileChecked}
        onDeleteFile={onDeleteFile}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File List/RESIFileListPanel',
  component: RESIFileListPanel,
  argTypes: {
    files: { table: { disable: true } },
    onAddFiles: { table: { disable: true } },
    onDeleteAllFiles: { table: { disable: true } },
    onSelectAllFiles: { table: { disable: true } },
    onUnselectAllFiles: { table: { disable: true } },
    onChangeFileColor: { table: { disable: true } },
    onChangeFileStrokeWidth: { table: { disable: true } },
    onChangeFileChecked: { table: { disable: true } },
    onDeleteFile: { table: { disable: true } },
  },
} as Meta<typeof RESIFileListPanel>;
