import { useCallback } from 'react';

import useStore from '@/store/store';
import fetchExampleFiles from '@/utils/resi-files/fetchExampleFiles';
import openFiles from '@/utils/resi-files/openFiles';
import processFiles from '@/utils/resi-files/processFiles';

function useAddFiles() {
  const addFiles = useStore((state) => state.addFiles);
  const isFetchingFiles = useStore((state) => state.isFetchingFiles);
  const setIsFetchingFiles = useStore((state) => state.setIsFetchingFiles);

  const handleAddFiles = useCallback(() => {
    processFiles(openFiles)
      .then(addFiles)
      .catch(() => {
        // do nothing
      });
  }, [addFiles]);

  const handleFetchExampleFiles = useCallback(() => {
    setIsFetchingFiles(true);

    processFiles(fetchExampleFiles)
      .then(addFiles)
      .catch(() => {
        // do nothing
      })
      .finally(() => {
        setIsFetchingFiles(false);
      });
  }, [addFiles, setIsFetchingFiles]);

  return {
    isFetchingFiles,
    addFiles: handleAddFiles,
    fetchExampleFiles: handleFetchExampleFiles,
  };
}

export default useAddFiles;
