import getRandomInt from './getRandomInt';

function getRandomArray<T>(generator: (idx: number) => T, count?: number): T[] {
  return new Array(count || getRandomInt(15, 35))
    .fill(null)
    .map((_, idx) => generator(idx));
}

export default getRandomArray;
