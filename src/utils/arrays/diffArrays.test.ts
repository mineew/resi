import diffArrays from './diffArrays';

describe('@/utils/arrays/diffArrays', () => {
  it('should return the difference between arrays', () => {
    const a = [6, 8, 12];
    const b = [4, 5, 8];

    const diff = diffArrays(a, b);
    expect(diff).toStrictEqual([2, 3, 4]);
  });

  it('should handle arrays of different lengths', () => {
    const a = [3, 3, 3];
    const b = [2, 2];

    const diff1 = diffArrays(a, b);
    expect(diff1).toStrictEqual([1, 1]);

    const diff2 = diffArrays(b, a, true);
    expect(diff2).toStrictEqual([-1, -1]);
  });

  it('should discard negative differences', () => {
    const a = [2, 4, 8];
    const b = [1, 5, 12];

    const diff = diffArrays(a, b, false);
    expect(diff).toStrictEqual([1, 0, 0]);
  });

  it('should handle corner cases', () => {
    expect(diffArrays([], [])).toStrictEqual([]);
    expect(diffArrays([1, 2, 3], [])).toStrictEqual([]);
    expect(diffArrays([], [1, 2, 3])).toStrictEqual([]);
  });
});
