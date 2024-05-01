import { useMemo } from 'react';

import useStore from '@/store/store';
import smoothFiles from '@/utils/stats/smoothFiles';

import useFiles from './useFiles';

function useSmoothedFiles(type?: 'all' | 'checked') {
  const files = useFiles(type);
  const zScoreThreshold = useStore((state) => state.settings.zScoreThreshold);
  const zScoreMeanMethod = useStore((state) => state.settings.zScoreMeanMethod);
  const chunkSize = useStore((state) => state.settings.chunkSize);
  const chunkAggregateMethod = useStore(
    (state) => state.settings.chunkAggregateMethod,
  );

  const smoothedFiles = useMemo(() => {
    return smoothFiles(
      files,
      zScoreThreshold,
      zScoreMeanMethod,
      chunkSize,
      chunkAggregateMethod,
    );
  }, [
    files,
    zScoreThreshold,
    zScoreMeanMethod,
    chunkSize,
    chunkAggregateMethod,
  ]);

  return smoothedFiles;
}

export default useSmoothedFiles;
