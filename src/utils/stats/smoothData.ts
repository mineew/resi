import { mean, median } from 'simple-statistics';

import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';
import splitArrayOnChunks from '@/utils/arrays/splitArrayOnChunks';

import { filterOutliers } from './filterOutliers';

function smoothData(data: number[], settings: Settings = {}) {
  const {
    chunkSize = DEFAULT_SETTINGS.chunkSize,
    chunkAggregateMethod = DEFAULT_SETTINGS.chunkAggregateMethod,
  } = settings;

  const result: number[] = [];
  const chunks = splitArrayOnChunks(data, chunkSize);

  for (const chunk of chunks) {
    const filtered = filterOutliers(chunk, settings);
    const filteredMean =
      chunkAggregateMethod === 'mean' ? mean(filtered) : median(filtered);

    result.push(filteredMean);
  }

  return result;
}

export default smoothData;
