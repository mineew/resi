import { FolderDown, FolderOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Loader from '@/components/ui/Loader/Loader';

import styles from './RESIFilesInit.module.css';

interface RESIFilesInitProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isFetchingFiles?: boolean;
}

function RESIFilesInit(props: RESIFilesInitProps) {
  const { onAddFiles, isFetchingFiles, onFetchExampleFiles } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.section}>
        <Button onClick={onAddFiles} disabled={isFetchingFiles}>
          <FolderOpen />
          {t('RESI_FILE_LIST.OPEN_FILES')}
        </Button>

        <p>{t('RESI_FILE_LIST.OPEN_FILES_DESCRIPTION')}</p>
      </div>

      <div className={styles.section}>
        <p>{t('RESI_FILE_LIST.FETCH_FILES_DESCRIPTION')}</p>

        <Button
          outlined
          disabled={isFetchingFiles}
          onClick={onFetchExampleFiles}
        >
          {isFetchingFiles ? <Loader /> : <FolderDown />}
          {t('RESI_FILE_LIST.FETCH_FILES')}
        </Button>
      </div>
    </>
  );
}

export default RESIFilesInit;
