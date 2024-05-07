import { type DataPoint, linear } from 'regression';

import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function convertGrowthToLinearRegression(growth: RESIFileGrowth[]) {
  const points: DataPoint[] = growth.map((g) => [g.distance / 10, g.growth]);

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

export default convertGrowthToLinearRegression;
