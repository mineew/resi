import { useMemo } from 'react';

import useStore from '@/store/store';
import { type RESIFile } from '@/store/types/RESIFile';
import cropFiles from '@/utils/resi-files/cropFiles';

function useCroppedFiles(files: RESIFile[]) {
  const offsetLeft = useStore((state) => state.settings.offsetLeft);
  const offsetRight = useStore((state) => state.settings.offsetRight);

  const croppedFiles = useMemo(() => {
    return cropFiles(files, offsetLeft, offsetRight);
  }, [files, offsetLeft, offsetRight]);

  return croppedFiles;
}

export default useCroppedFiles;
