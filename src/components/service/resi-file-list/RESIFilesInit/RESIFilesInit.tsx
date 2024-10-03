import { FolderDown, FolderOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Loader from '@/components/ui/Loader/Loader';

import styles from './RESIFilesInit.module.css';

interface RESIFilesInitProps {
  onAddFiles: () => void;
  onFetchExampleFiles: () => void;
  isAddingFiles?: boolean;
  isFetchingFiles?: boolean;
}

function RESIFilesInit(props: RESIFilesInitProps) {
  const { isAddingFiles, isFetchingFiles, onAddFiles, onFetchExampleFiles } =
    props;
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.section}>
        <Button
          onClick={onAddFiles}
          disabled={isAddingFiles || isFetchingFiles}
        >
          <FolderOpen />
          {t('RESI_FILE_LIST.OPEN_FILES')}
        </Button>

        <p>{t('RESI_FILE_LIST.OPEN_FILES_DESCRIPTION')}</p>
      </div>

      <div className={styles.section}>
        <p>{t('RESI_FILE_LIST.FETCH_FILES_DESCRIPTION')}</p>

        <Button
          onClick={onFetchExampleFiles}
          disabled={isAddingFiles || isFetchingFiles}
          outlined
        >
          {isFetchingFiles ? <Loader /> : <FolderDown />}
          {t('RESI_FILE_LIST.FETCH_FILES')}
        </Button>
      </div>
    </>
  );
}

export default RESIFilesInit;
