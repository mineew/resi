import { linear, type DataPoint } from 'regression';

import type { ScatterChartPoint } from './ScatterChartPoint';

function convertPointsToLinearRegression(points: ScatterChartPoint[]) {
  const dataPoints: DataPoint[] = points.map((p) => [p.x, p.y]);

  const minX = Math.min(...dataPoints.map((p) => p[0]));
  const maxX = Math.max(...dataPoints.map((p) => p[0]));

  const regression = linear(dataPoints);
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

export default convertPointsToLinearRegression;
