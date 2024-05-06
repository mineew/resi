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
    .map(filterZScores(scores, zScoreThreshold))
    .filter(filterNotNull) as number[];
}

function filterZScores(scores: number[], threshold: number) {
  return (x: number, i: number) => {
    if (scores[i] <= -threshold || scores[i] >= threshold) {
      return null;
    }

    return x;
  };
}

function filterNotNull(x: number | null) {
  return x !== null;
}

export default filterOutliers;
