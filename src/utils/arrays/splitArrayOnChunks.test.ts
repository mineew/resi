import splitArrayOnChunks from './splitArrayOnChunks';

describe('@/utils/splitArrayOnChunks', () => {
  it('should split an array on chunks', () => {
    const array = [1, 2, 3, 4, 5];
    const chunks = splitArrayOnChunks(array, 2);

    expect(chunks).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
