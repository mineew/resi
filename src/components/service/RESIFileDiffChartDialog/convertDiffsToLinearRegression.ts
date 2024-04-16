import { type DataPoint, linear } from 'regression';

import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

function convertDiffsToLinearRegression(diffs: RESIFileDiff[]) {
  const points: DataPoint[] = diffs.map((diff) => [
    diff.totalDistance / 10,
    diff.totalDiff,
  ]);

  const minX = Math.min(...points.map((p) => p[0]));
  const maxX = Math.max(...points.map((p) => p[0]));

  const regression = linear(points);
  const regressionLine = [
    {
      x: minX,
      y: regression.predict(minX)[1],
    },
    {
      x: maxX,
      y: regression.predict(maxX)[1],
    },
  ];

  return {
    regression,
    regressionLine,
  };
}

export default convertDiffsToLinearRegression;
