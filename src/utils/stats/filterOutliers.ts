import { mean, median, standardDeviation, zScore } from 'simple-statistics';

import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';

function filterOutliers(data: number[], settings: Settings = {}) {
  const {
    zScoreThreshold = DEFAULT_SETTINGS.zScoreThreshold,
    zScoreMeanMethod = DEFAULT_SETTINGS.zScoreMeanMethod,
  } = settings;

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
