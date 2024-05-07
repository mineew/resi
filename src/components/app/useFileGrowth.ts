import { useMemo } from 'react';

import useStore from '@/store/store';
import calculateFileGrowth from '@/utils/resi-files/calculateFileGrowth';

import useCroppedFiles from './useCroppedFiles';
import useFiles from './useFiles';
import useSmoothedFiles from './useSmoothedFiles';

function useFileGrowth() {
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

  const growth = useMemo(() => {
    return calculateFileGrowth(
      smoothedFiles,
      chunkSize,
      differenceMeanMethod,
      takeNegativeDiffs,
    );
  }, [smoothedFiles, chunkSize, differenceMeanMethod, takeNegativeDiffs]);

  return growth;
}

export default useFileGrowth;
