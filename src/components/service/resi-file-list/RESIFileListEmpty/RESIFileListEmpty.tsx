import { Inbox } from 'lucide-react';
import { memo } from 'react';

import RESIFilesInit from '@/components/service/resi-file-list/RESIFilesInit/RESIFilesInit';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isAddingFiles?: boolean;
  isFetchingFiles?: boolean;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { onAddFiles, onFetchExampleFiles, isAddingFiles, isFetchingFiles } =
    props;

  return (
    <EmptyState icon={<Inbox />}>
      <RESIFilesInit
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
        isAddingFiles={isAddingFiles}
        isFetchingFiles={isFetchingFiles}
      />
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
