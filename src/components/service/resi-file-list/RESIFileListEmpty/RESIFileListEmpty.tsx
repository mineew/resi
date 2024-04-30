import { FolderOpen, Inbox } from 'lucide-react';

import Button from '@/components/ui/Button/Button';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
}

function RESIFileListEmpty(props: RESIFileListEmptyProps) {
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
}

export default RESIFileListEmpty;
