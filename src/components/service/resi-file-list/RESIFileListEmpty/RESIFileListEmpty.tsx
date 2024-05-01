import { FolderOpen, Inbox } from 'lucide-react';
import { memo } from 'react';

import Button from '@/components/ui/Button/Button';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { onAddFiles } = props;

  return (
    <EmptyState icon={<Inbox />}>
      <Button onClick={onAddFiles}>
        <FolderOpen />
        Открыть RESI файлы
      </Button>

      <p>Файлы прибора резистографа, расширение *.xls</p>
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
