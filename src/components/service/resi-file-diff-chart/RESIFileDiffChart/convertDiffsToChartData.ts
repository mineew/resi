import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

function convertDiffsToChartData(diffs: RESIFileDiff[]) {
  const data: Array<{ x: number; y: number; z: number }> = [];

  for (let i = 0; i < diffs.length; i += 1) {
    data.push({
      x: diffs[i].totalDistance / 10,
      y: diffs[i].totalDiff,
      z: 1,
    });
  }

  return data;
}

export default convertDiffsToChartData;
