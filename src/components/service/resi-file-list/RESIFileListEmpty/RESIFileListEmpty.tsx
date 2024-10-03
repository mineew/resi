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
  const { isAddingFiles, isFetchingFiles, onAddFiles, onFetchExampleFiles } =
    props;

  return (
    <EmptyState icon={<Inbox />}>
      <RESIFilesInit
        isAddingFiles={isAddingFiles}
        isFetchingFiles={isFetchingFiles}
        onAddFiles={onAddFiles}
        onFetchExampleFiles={onFetchExampleFiles}
      />
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
