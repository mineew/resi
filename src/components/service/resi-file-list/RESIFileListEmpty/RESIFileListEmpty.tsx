import { FolderOpen, Inbox } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { onAddFiles } = props;
  const { t } = useTranslation();

  return (
    <EmptyState icon={<Inbox />}>
      <Button onClick={onAddFiles}>
        <FolderOpen />
        {t('RESI_FILE_LIST.OPEN_RESI_FILES')}
      </Button>

      <p>Файлы прибора резистографа, расширение *.xls</p>
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
