import { mean, median } from 'simple-statistics';

import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function calculateFileGrowth(
  files: RESIFile[],
  chunkSize = 300,
  differenceMeanMethod: 'mean' | 'median' = 'mean',
  takeNegativeDiffs?: boolean,
): RESIFileGrowth[] {
  const distanceGrowthMap: Record<string, number[]> = {};

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];

    for (let j = 1; j < file.contents.length; j += 1) {
      const a = file.contents[j];
      const b = file.contents[j - 1];
      const growth = a - b;
      const distance = (chunkSize * j) / 100;

      if (!takeNegativeDiffs && growth < 0) {
        continue;
      }

      if (!distanceGrowthMap[distance]) {
        distanceGrowthMap[distance] = [];
      }

      distanceGrowthMap[distance].push(growth);
    }
  }

  const growth: RESIFileGrowth[] = [];

  for (const distance of Object.keys(distanceGrowthMap)) {
    growth.push({
      distance: Number(distance),
      growth:
        differenceMeanMethod === 'mean'
          ? mean(distanceGrowthMap[distance])
          : median(distanceGrowthMap[distance]),
    });
  }

  return growth;
}

export default calculateFileGrowth;
