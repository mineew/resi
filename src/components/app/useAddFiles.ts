import { useCallback } from 'react';

import useStore from '@/store/store';
import fetchExampleFiles from '@/utils/resi-files/fetchExampleFiles';
import openFiles from '@/utils/resi-files/openFiles';
import processFiles from '@/utils/resi-files/processFiles';

function useAddFiles() {
  const addFiles = useStore((state) => state.addFiles);
  const isAddingFiles = useStore((state) => state.isAddingFiles);
  const setIsAddingFiles = useStore((state) => state.setIsAddingFiles);
  const isFetchingFiles = useStore((state) => state.isFetchingFiles);
  const setIsFetchingFiles = useStore((state) => state.setIsFetchingFiles);

  const handleAddFiles = useCallback(() => {
    setIsAddingFiles(true);

    processFiles(openFiles)
      .then(addFiles)
      .catch(() => {
        // do nothing
      })
      .finally(() => {
        setIsAddingFiles(false);
      });
  }, [addFiles, setIsAddingFiles]);

  const handleFetchExampleFiles = useCallback(() => {
    setIsAddingFiles(true);
    setIsFetchingFiles(true);

    processFiles(fetchExampleFiles)
      .then(addFiles)
      .catch(() => {
        // do nothing
      })
      .finally(() => {
        setIsAddingFiles(false);
        setIsFetchingFiles(false);
      });
  }, [addFiles, setIsAddingFiles, setIsFetchingFiles]);

  return {
    addFiles: handleAddFiles,
    isAddingFiles,

    fetchExampleFiles: handleFetchExampleFiles,
    isFetchingFiles,
  };
}

export default useAddFiles;
