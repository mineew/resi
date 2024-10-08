import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import type { RESIFile } from '@/store/types/RESIFile';
import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';
import getRandomArray from '@/utils/misc/getRandomArray';

import RESIFileListPanel from './RESIFileListPanel';

const files: RESIFile[] = getRandomArray((idx) =>
  createRandomRESIFile(`File-${idx + 1}`),
);

export const Default: StoryFn<typeof RESIFileListPanel> = ({
  onAddFiles,
  onDeleteFile,
  onDeleteAllFiles,
  onSelectAllFiles,
  onChangeFileColor,
  onUnselectAllFiles,
  onFetchExampleFiles,
  onChangeFileChecked,
  onChangeFileStrokeWidth,
}) => {
  return (
    <div
      style={{
        margin: 20,
        width: 300,
        height: 'calc(100vh - 40px)',
        backgroundColor: 'var(--slate-2)',
        border: '1px solid var(--slate-6)',
      }}
    >
      <RESIFileListPanel
        files={files}
        onAddFiles={onAddFiles}
        onDeleteFile={onDeleteFile}
        onDeleteAllFiles={onDeleteAllFiles}
        onSelectAllFiles={onSelectAllFiles}
        onChangeFileColor={onChangeFileColor}
        onUnselectAllFiles={onUnselectAllFiles}
        onFetchExampleFiles={onFetchExampleFiles}
        onChangeFileChecked={onChangeFileChecked}
        onChangeFileStrokeWidth={onChangeFileStrokeWidth}
      />
    </div>
  );
};

export default {
  component: RESIFileListPanel,
  title: 'Components/Service/RESI File List/RESIFileListPanel',
  args: {
    onAddFiles: fn(),
    onDeleteFile: fn(),
    onDeleteAllFiles: fn(),
    onSelectAllFiles: fn(),
    onChangeFileColor: fn(),
    onUnselectAllFiles: fn(),
    onFetchExampleFiles: fn(),
    onChangeFileChecked: fn(),
    onChangeFileStrokeWidth: fn(),
  },
  argTypes: {
    files: { table: { disable: true } },
    appSettings: { table: { disable: true } },
    isFetchingFiles: { table: { disable: true } },
    onAddFiles: { table: { disable: true } },
    onDeleteFile: { table: { disable: true } },
    onDeleteAllFiles: { table: { disable: true } },
    onSelectAllFiles: { table: { disable: true } },
    onChangeFileColor: { table: { disable: true } },
    onUnselectAllFiles: { table: { disable: true } },
    onFetchExampleFiles: { table: { disable: true } },
    onChangeFileChecked: { table: { disable: true } },
    onChangeFileStrokeWidth: { table: { disable: true } },
  },
} as Meta<typeof RESIFileListPanel>;
