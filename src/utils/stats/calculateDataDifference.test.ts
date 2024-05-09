import calculateDataDifference from './calculateDataDifference';

describe('@/utils/stats/calculateDataDifference', () => {
  it('should return the average of the difference between arrays', () => {
    const avgDiff1 = calculateDataDifference([9, 9, 9], [6, 6, 6]);
    expect(avgDiff1).toBe(3);

    const avgDiff2 = calculateDataDifference([9, 9, 9], [6, 12, 12]);
    expect(avgDiff2).toBe(1);

    const avgDiff3 = calculateDataDifference([9, 9], [7, 10], 'median', true);
    expect(avgDiff3).toBe(0.5);
  });

  it('should handle corner cases', () => {
    expect(calculateDataDifference([], [])).toBe(0);
    expect(calculateDataDifference([1, 2, 3], [])).toBe(0);
    expect(calculateDataDifference([], [1, 2, 3])).toBe(0);
  });
});
