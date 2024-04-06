import { mean, median } from 'simple-statistics';

import { type FilterOutliersOptions, filterOutliers } from './filterOutliers';
import splitArrayOnChunks from './splitArrayOnChunks';

interface SmoothDataOptions extends FilterOutliersOptions {
  chunkSize?: number;
  chunkAggregateMethod?: 'mean' | 'median';
}

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

export { smoothData };
export type { SmoothDataOptions };
