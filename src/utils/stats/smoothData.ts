import { mean, median } from 'simple-statistics';

import splitArrayOnChunks from '@/utils/arrays/splitArrayOnChunks';

import filterOutliers from './filterOutliers';

function smoothData(
  data: number[],
  zScoreThreshold?: number,
  zScoreMeanMethod?: 'mean' | 'median',
  chunkSize = 300,
  chunkAggregateMethod: 'mean' | 'median' = 'mean',
) {
  const result: number[] = [];
  const chunks = splitArrayOnChunks(data, chunkSize);

  for (const chunk of chunks) {
    const filtered = filterOutliers(chunk, zScoreThreshold, zScoreMeanMethod);
    const filteredMean =
      chunkAggregateMethod === 'mean' ? mean(filtered) : median(filtered);

    result.push(filteredMean);
  }

  return result;
}

export default smoothData;
