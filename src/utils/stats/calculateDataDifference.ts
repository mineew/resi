import { mean, median } from 'simple-statistics';

import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';

function calculateDataDifference(
  a: number[],
  b: number[],
  options: SmoothDataOptions = {},
) {
  const { differenceMeanMethod = 'mean' } = options;
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
