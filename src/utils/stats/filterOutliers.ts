import { mean, median, standardDeviation, zScore } from 'simple-statistics';

function filterOutliers(
  data: number[],
  zScoreThreshold = 3,
  zScoreMeanMethod: 'mean' | 'median' = 'mean',
) {
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
