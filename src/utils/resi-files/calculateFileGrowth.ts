import { mean, median } from 'simple-statistics';

import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function calculateFileGrowth(
  files: RESIFile[],
  chunkSize = 300,
  growthMeanMethod: 'mean' | 'median' = 'mean',
  takeNegativeGrowth = false,
): RESIFileGrowth[] {
  const distanceGrowthMap: Record<string, number[]> = {};

  for (const file of files) {
    let totalGrowth = 0;

    for (let j = 1; j < file.contents.length; j += 1) {
      const distance = (chunkSize * j) / 100;
      const a = file.contents[j];
      const b = file.contents[j - 1];
      const growth = a - b;
      totalGrowth += growth;

      if (!takeNegativeGrowth && totalGrowth < 0) {
        continue;
      }

      if (!(distance in distanceGrowthMap)) {
        distanceGrowthMap[distance] = [];
      }

      distanceGrowthMap[distance].push(totalGrowth);
    }
  }

  const distances = Object.keys(distanceGrowthMap);

  const growthArray: RESIFileGrowth[] = distances.map((distance) => ({
    distance: Number(distance),
    growth:
      growthMeanMethod === 'mean'
        ? mean(distanceGrowthMap[distance])
        : median(distanceGrowthMap[distance]),
  }));

  return growthArray;
}

export default calculateFileGrowth;
