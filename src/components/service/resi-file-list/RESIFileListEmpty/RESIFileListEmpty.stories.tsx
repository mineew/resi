import { type Meta, type StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import RESIFileListEmpty from './RESIFileListEmpty';

export const Default: StoryFn<typeof RESIFileListEmpty> = ({
  onAddFiles,
  onFetchExampleFiles,
  isFetchExampleFiles,
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
      <RESIFileListEmpty
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
        isFetchExampleFiles={isFetchExampleFiles}
      />
    </div>
  );
};

export default {
  title: 'Components/Service/RESI File List/RESIFileListEmpty',
  component: RESIFileListEmpty,
  argTypes: {
    onAddFiles: { table: { disable: true } },
    onFetchExampleFiles: { table: { disable: true } },
  },
  args: {
    onAddFiles: fn(),
    onFetchExampleFiles: fn(),
    isFetchExampleFiles: false,
  },
} as Meta<typeof RESIFileListEmpty>;
