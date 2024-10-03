import type { RESIFile } from '@/store/types/RESIFile';

import getRandomArray from './getRandomArray';
import getRandomBoolean from './getRandomBoolean';
import getRandomHEXColor from './getRandomHEXColor';
import getRandomInt from './getRandomInt';

interface CreateRandomRESIFileOptions {
  color?: string;
  strokeWidth?: number;
  contentsLength?: number;
  contentsItemMin?: number;
  contentsItemMax?: number;
}

function createRandomRESIFile(
  name: string,
  options: CreateRandomRESIFileOptions = {},
): RESIFile {
  const {
    color,
    strokeWidth,
    contentsLength,
    contentsItemMin = 50,
    contentsItemMax = 150,
  } = options;

  return {
    name,
    checked: getRandomBoolean(),
    color: color ?? getRandomHEXColor(),
    strokeWidth: strokeWidth ?? getRandomInt(1, 3),
    contents: getRandomArray(
      () => getRandomInt(contentsItemMin, contentsItemMax),
      contentsLength,
    ),
  };
}

export default createRandomRESIFile;
