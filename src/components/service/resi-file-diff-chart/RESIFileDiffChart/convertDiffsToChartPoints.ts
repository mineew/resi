import type { ScatterChartPoint } from '@/components/charts/ScatterChart/ScatterChartPoint';
import type { RESIFileDiff } from '@/store/types/RESIFileDiff';

function convertDiffsToChartPoints(diffs: RESIFileDiff[]) {
  const points: ScatterChartPoint[] = [];

  for (const diff of diffs) {
    const x = diff.totalDistance / 10;
    const y = diff.totalDiff;

    points.push({ x, y });
  }

  return points;
}

export default convertDiffsToChartPoints;
