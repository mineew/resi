import type { ScatterChartPoint } from '@/components/charts/ScatterChart/ScatterChartPoint';
import type { RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function convertGrowthToChartPoints(growth: RESIFileGrowth[]) {
  const points: ScatterChartPoint[] = [];

  for (const g of growth) {
    const x = g.distance / 10;
    const y = g.growth;

    points.push({ x, y });
  }

  return points;
}

export default convertGrowthToChartPoints;
