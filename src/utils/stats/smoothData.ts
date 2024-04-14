import { mean, median } from 'simple-statistics';

import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';
import splitArrayOnChunks from '@/utils/arrays/splitArrayOnChunks';

import { filterOutliers } from './filterOutliers';

function smoothData(data: number[], options: SmoothDataOptions = {}) {
  const { chunkSize = 100, chunkAggregateMethod = 'mean' } = options;

  const result: number[] = [];
  const chunks = splitArrayOnChunks(data, chunkSize);

  for (const chunk of chunks) {
    const filtered = filterOutliers(chunk, options);
    const filteredMean =
      chunkAggregateMethod === 'mean' ? mean(filtered) : median(filtered);

    result.push(filteredMean);
  }

  return result;
}

export default smoothData;
