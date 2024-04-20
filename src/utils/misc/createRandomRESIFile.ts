import { type RESIFile } from '@/store/types/RESIFile';

import getRandomArray from './getRandomArray';
import getRandomBoolean from './getRandomBoolean';
import getRandomHEXColor from './getRandomHEXColor';
import getRandomInt from './getRandomInt';

function createRandomRESIFile(name: string): RESIFile {
  return {
    name,
    checked: getRandomBoolean(),
    color: getRandomHEXColor(),
    strokeWidth: getRandomInt(1, 3),
    contents: getRandomArray(() => getRandomInt(50, 150)),
  };
}

export default createRandomRESIFile;
