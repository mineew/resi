import { useMemo } from 'react';

import useStore from '@/store/store';
import { type RESIFile } from '@/store/types/RESIFile';
import cropFiles from '@/utils/resi-files/cropFiles';

function useCroppedFiles(files: RESIFile[]) {
  const offsetLeft = useStore((state) => state.settings.offsetLeft) || 0;
  const offsetRight = useStore((state) => state.settings.offsetRight) || 0;

  const croppedFiles = useMemo(() => {
    return cropFiles(files, offsetLeft * 100, offsetRight * 100);
  }, [files, offsetLeft, offsetRight]);

  return croppedFiles;
}

export default useCroppedFiles;
