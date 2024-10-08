import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import RESIFileListEmpty from './RESIFileListEmpty';

export const Default: StoryFn<typeof RESIFileListEmpty> = ({
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
        isFetchingFiles={isFetchingFiles}
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
      />
    </div>
  );
};

export default {
  component: RESIFileListEmpty,
  title: 'Components/Service/RESI File List/RESIFileListEmpty',
  args: {
    isFetchingFiles: false,
    onAddFiles: fn(),
    onFetchExampleFiles: fn(),
  },
  argTypes: {
    onAddFiles: { table: { disable: true } },
    onFetchExampleFiles: { table: { disable: true } },
  },
} as Meta<typeof RESIFileListEmpty>;
