import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function convertGrowthToChartData(growth: RESIFileGrowth[]) {
  const data: Array<{ x: number; y: number; z: number }> = [];

  for (let i = 0; i < growth.length; i += 1) {
    const x = growth[i].distance / 10;
    const y = growth[i].growth;

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

export default convertGrowthToChartData;
