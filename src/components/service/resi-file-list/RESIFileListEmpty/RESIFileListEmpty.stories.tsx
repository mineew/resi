import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import RESIFileListEmpty from './RESIFileListEmpty';

export const Default: StoryFn<typeof RESIFileListEmpty> = ({
  isAddingFiles,
  isFetchingFiles,
  onAddFiles,
  onFetchExampleFiles,
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
      <RESIFileListEmpty
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
        isAddingFiles={isAddingFiles}
        isFetchingFiles={isFetchingFiles}
      />
    </div>
  );
};

export default {
  component: RESIFileListEmpty,
  title: 'Components/Service/RESI File List/RESIFileListEmpty',
  argTypes: {
    onAddFiles: { table: { disable: true } },
    onFetchExampleFiles: { table: { disable: true } },
  },
  args: {
    isAddingFiles: false,
    isFetchingFiles: false,
    onAddFiles: fn(),
    onFetchExampleFiles: fn(),
  },
} as Meta<typeof RESIFileListEmpty>;
