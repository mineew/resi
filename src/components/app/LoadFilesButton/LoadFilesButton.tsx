import { FolderOpen } from 'lucide-react';
import { useCallback } from 'react';

import useStore from '@/store/store';
import processFiles from '@/utils/processFiles';

import styles from './LoadFilesButton.module.css';

function LoadFilesButton() {
  const setFiles = useStore((store) => store.setFiles);

  const handleClick = useCallback(() => {
    processFiles()
      .then(setFiles)
      .catch(() => setFiles([]));
  }, [setFiles]);

  return (
    <button className={styles.button} onClick={handleClick}>
      <FolderOpen />
      Загрузить RESI файлы
    </button>
  );
}

export default LoadFilesButton;
