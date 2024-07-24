import { FolderDown, FolderOpen, Inbox } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import EmptyState from '@/components/ui/EmptyState/EmptyState';

import styles from './RESIFileListEmpty.module.css';

interface RESIFileListEmptyProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isFetchExampleFiles?: boolean;
}

const RESIFileListEmpty = memo((props: RESIFileListEmptyProps) => {
  const { onAddFiles, onFetchExampleFiles, isFetchExampleFiles } = props;
  const { t } = useTranslation();

  return (
    <EmptyState icon={<Inbox />}>
      <div className={styles.section}>
        <Button onClick={onAddFiles}>
          <FolderOpen />
          {t('RESI_FILE_LIST.OPEN_FILES')}
        </Button>

        <p>{t('RESI_FILE_LIST.OPEN_FILES_DESCRIPTION')}</p>
      </div>

      <div className={styles.section}>
        <p>{t('RESI_FILE_LIST.FETCH_FILES_DESCRIPTION')}</p>

        <Button
          onClick={onFetchExampleFiles}
          disabled={isFetchExampleFiles}
          outlined
        >
          <FolderDown />
          {t('RESI_FILE_LIST.FETCH_FILES')}
        </Button>
      </div>
    </EmptyState>
  );
});

RESIFileListEmpty.displayName = 'RESIFileListEmpty';

export default RESIFileListEmpty;
