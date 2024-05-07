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
  const growthMeanMethod = useStore((state) => state.settings.growthMeanMethod);
  const takeNegativeDiffs = useStore(
    (state) => state.settings.takeNegativeDiffs,
  );
  const takeNegativeGrowth = useStore(
    (state) => state.settings.takeNegativeGrowth,
  );

  const growth = useMemo(() => {
    return calculateFileGrowth(
      smoothedFiles,
      chunkSize,
      growthMeanMethod,
      takeNegativeDiffs,
      takeNegativeGrowth,
    );
  }, [
    smoothedFiles,
    chunkSize,
    growthMeanMethod,
    takeNegativeDiffs,
    takeNegativeGrowth,
  ]);

  return growth;
}

export default useFileGrowth;
