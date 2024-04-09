import { FolderOpen } from 'lucide-react';
import { useCallback } from 'react';

import Button from '@/components/ui/Button/Button';
import useStore from '@/store/store';
import processFiles from '@/utils/resi-files/processFiles';

function LoadFilesButton() {
  const setFiles = useStore((store) => store.setFiles);

  const handleClick = useCallback(() => {
    processFiles()
      .then(setFiles)
      .catch(() => setFiles([]));
  }, [setFiles]);

  return (
    <Button onClick={handleClick} fullWidth center>
      <FolderOpen />
      Загрузить RESI файлы
    </Button>
  );
}

export default LoadFilesButton;
