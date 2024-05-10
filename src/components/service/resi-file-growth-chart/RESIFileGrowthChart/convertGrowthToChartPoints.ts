import { type ScatterChartPoint } from '@/components/charts/ScatterChart/ScatterChartPoint';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function convertGrowthToChartPoints(growth: RESIFileGrowth[]) {
  const points: ScatterChartPoint[] = [];

  for (let i = 0; i < growth.length; i += 1) {
    const x = growth[i].distance / 10;
    const y = growth[i].growth;

    points.push({ x, y });
  }

  return points;
}

export default convertGrowthToChartPoints;
