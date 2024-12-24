import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import RESIFileListEmpty from './RESIFileListEmpty';

export const Default: StoryFn<typeof RESIFileListEmpty> = ({
  onAddFiles,
  isFetchingFiles,
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
        isFetchingFiles={isFetchingFiles}
        onFetchExampleFiles={onFetchExampleFiles}
      />
    </div>
  );
};

export default {
  component: RESIFileListEmpty,
  title: 'Components/Service/RESI File List/RESIFileListEmpty',
  args: {
    onAddFiles: fn(),
    isFetchingFiles: false,
    onFetchExampleFiles: fn(),
  },
  argTypes: {
    onAddFiles: { table: { disable: true } },
    onFetchExampleFiles: { table: { disable: true } },
  },
} as Meta<typeof RESIFileListEmpty>;
