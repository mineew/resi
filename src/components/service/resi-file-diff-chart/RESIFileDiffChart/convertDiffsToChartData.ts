import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

function convertDiffsToChartData(diffs: RESIFileDiff[]) {
  const data: Array<{ x: number; y: number; z: number }> = [];

  for (let i = 0; i < diffs.length; i += 1) {
    const x = diffs[i].totalDistance / 10;
    const y = diffs[i].totalDiff;

    data.push({ x, y, z: 1 });
  }

  const xs = data.map((i) => i.x);
  const ys = data.map((i) => i.y);

  return {
    data,
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

export default convertDiffsToChartData;
