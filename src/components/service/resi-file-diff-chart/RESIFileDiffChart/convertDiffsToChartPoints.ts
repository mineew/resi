import { type ScatterChartPoint } from '@/components/charts/ScatterChart/ScatterChartPoint';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

function convertDiffsToChartPoints(diffs: RESIFileDiff[]) {
  const points: ScatterChartPoint[] = [];

  for (let i = 0; i < diffs.length; i += 1) {
    const x = diffs[i].totalDistance / 10;
    const y = diffs[i].totalDiff;

    points.push({ x, y });
  }

  return points;
}

export default convertDiffsToChartPoints;
