import { mean, median } from 'simple-statistics';

import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

function calculateFileGrowth(
  files: RESIFile[],
  chunkSize = 300,
  growthMeanMethod: 'mean' | 'median' = 'mean',
  takeNegativeDiffs = false,
  takeNegativeGrowth = false,
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

  const distances = Object.keys(distanceGrowthMap);
  if (!distances.length) {
    return [];
  }

  const growthArray: RESIFileGrowth[] = [
    {
      distance: Number(distances[0]),
      growth:
        growthMeanMethod === 'mean'
          ? mean(distanceGrowthMap[distances[0]])
          : median(distanceGrowthMap[distances[0]]),
    },
  ];

  for (let i = 1; i < distances.length; i += 1) {
    const distance = Number(distances[i]);
    const growth =
      growthMeanMethod === 'mean'
        ? mean(distanceGrowthMap[distance])
        : median(distanceGrowthMap[distance]);

    const prevGrowth = growthArray[growthArray.length - 1];

    if (!takeNegativeGrowth && prevGrowth.growth > growth) {
      continue;
    }

    growthArray.push({ distance, growth });
  }

  return growthArray;
}

export default calculateFileGrowth;
