import { mean, median } from 'simple-statistics';

import diffArrays from '@/utils/arrays/diffArrays';

function calculateDataDifference(
  a: number[],
  b: number[],
  differenceMeanMethod: 'mean' | 'median' = 'mean',
  takeNegativeDiffs = false,
) {
  const diffs = diffArrays(a, b, takeNegativeDiffs);

  if (!diffs.length) {
    return 0;
  }

  return differenceMeanMethod === 'mean' ? mean(diffs) : median(diffs);
}

export default calculateDataDifference;
