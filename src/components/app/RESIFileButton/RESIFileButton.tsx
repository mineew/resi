import { FilePlus2, FolderOpen } from 'lucide-react';
import { useCallback } from 'react';

import Button from '@/components/ui/Button/Button';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';
import processFiles from '@/utils/resi-files/processFiles';

function RESIFileButton() {
  const files = useStore(selectors.files);
  const addFiles = useStore(selectors.addFiles);

  const handleClick = useCallback(() => {
    processFiles()
      .then(addFiles)
      .catch(() => addFiles([]));
  }, [addFiles]);

  return (
    <Button onClick={handleClick} fullWidth center>
      {files.length ? <FilePlus2 /> : <FolderOpen />}
      {files.length ? 'Добавить RESI файлы' : 'Загрузить RESI файлы'}
    </Button>
  );
}

export default RESIFileButton;
