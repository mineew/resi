import { mean, median } from 'simple-statistics';

import { type Settings } from '@/store/types/Settings';

function calculateDataDifference(
  a: number[],
  b: number[],
  settings: Settings = {},
) {
  const { differenceMeanMethod = 'mean' } = settings;
  const diffs: number[] = [];
  const length = Math.max(a.length, b.length);

  for (let i = 0; i < length; i += 1) {
    if (a[i] !== undefined && b[i] !== undefined) {
      diffs.push(a[i] - b[i]);
    }
  }

  return differenceMeanMethod === 'mean' ? mean(diffs) : median(diffs);
}

export default calculateDataDifference;
