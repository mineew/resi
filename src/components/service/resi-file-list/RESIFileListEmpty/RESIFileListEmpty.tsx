import { Inbox } from 'lucide-react';
import { memo } from 'react';

import RESIFilesInit from '@/components/service/resi-file-list/RESIFilesInit/RESIFilesInit';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isFetchingExampleFiles?: boolean;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { onAddFiles, onFetchExampleFiles, isFetchingExampleFiles } = props;

  return (
    <EmptyState icon={<Inbox />}>
      <RESIFilesInit
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
        isFetchingExampleFiles={isFetchingExampleFiles}
      />
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
