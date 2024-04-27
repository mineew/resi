import { expect, test } from 'vitest';

import splitArrayOnChunks from './splitArrayOnChunks';

test('@/utils/splitArrayOnChunks', () => {
  const array = [1, 2, 3, 4, 5];
  const chunks = splitArrayOnChunks(array, 2);

  expect(chunks).toStrictEqual([[1, 2], [3, 4], [5]]);
});
