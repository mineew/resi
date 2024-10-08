import { Inbox } from 'lucide-react';
import { memo } from 'react';

import RESIFilesInit from '@/components/service/resi-file-list/RESIFilesInit/RESIFilesInit';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isFetchingFiles?: boolean;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { isFetchingFiles, onAddFiles, onFetchExampleFiles } = props;

  return (
    <EmptyState icon={<Inbox />}>
      <RESIFilesInit
        isFetchingFiles={isFetchingFiles}
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
      />
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
