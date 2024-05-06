import { useMemo } from 'react';

import useStore from '@/store/store';
import calculateFileDifferences from '@/utils/resi-files/calculateFileDifferences';

import useSmoothedFiles from './useSmoothedFiles';

function useFileDifferences() {
  const smoothedFiles = useSmoothedFiles('checked');
  const chunkSize = useStore((state) => state.settings.chunkSize);
  const differenceMeanMethod = useStore(
    (state) => state.settings.differenceMeanMethod,
  );
  const takeNegativeDiffs = useStore(
    (state) => state.settings.takeNegativeDiffs,
  );

  const fileDifferences = useMemo(() => {
    return calculateFileDifferences(
      smoothedFiles,
      chunkSize,
      differenceMeanMethod,
      takeNegativeDiffs,
    );
  }, [smoothedFiles, chunkSize, differenceMeanMethod, takeNegativeDiffs]);

  return fileDifferences;
}

export default useFileDifferences;
