import splitArrayOnChunks from './splitArrayOnChunks';

describe('@/utils/arrays/splitArrayOnChunks', () => {
  it('should split an array on chunks', () => {
    const array = [1, 2, 3, 4, 5];
    const chunks = splitArrayOnChunks(array, 2);

    expect(chunks).toStrictEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle corner cases', () => {
    const array = [1, 2, 3, 4, 5];

    expect(splitArrayOnChunks(array, NaN)).toStrictEqual([]);
    expect(splitArrayOnChunks(array, -1)).toStrictEqual([]);
    expect(splitArrayOnChunks(array, 0)).toStrictEqual([]);
    expect(splitArrayOnChunks(array, 100)).toStrictEqual([array]);
  });
});
