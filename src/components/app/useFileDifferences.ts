import { useMemo } from 'react';

import useStore from '@/store/store';
import calculateFileDifferences from '@/utils/resi-files/calculateFileDifferences';

import useCroppedFiles from './useCroppedFiles';
import useFiles from './useFiles';
import useSmoothedFiles from './useSmoothedFiles';

function useFileDifferences() {
  const files = useFiles('checked');
  const croppedFiles = useCroppedFiles(files);
  const smoothedFiles = useSmoothedFiles(croppedFiles);

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
