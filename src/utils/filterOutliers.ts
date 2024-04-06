import { mean, median, standardDeviation, zScore } from 'simple-statistics';

interface FilterOutliersOptions {
  zScoreThreshold?: number;
  zScoreMeanMethod?: 'mean' | 'median';
}

function filterOutliers(data: number[], options: FilterOutliersOptions = {}) {
  const { zScoreThreshold = 3, zScoreMeanMethod = 'mean' } = options;

  const m = zScoreMeanMethod === 'mean' ? mean(data) : median(data);
  const std = standardDeviation(data);
  const scores = data.map((x) => zScore(x, m, std));

  return data
    .map((x, i) => {
      if (scores[i] <= -zScoreThreshold || scores[i] >= zScoreThreshold) {
        return null;
      }

      return x;
    })
    .filter((x) => x !== null) as number[];
}

export { filterOutliers };
export type { FilterOutliersOptions };
