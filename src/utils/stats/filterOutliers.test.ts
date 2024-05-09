import filterOutliers from './filterOutliers';

describe('@/utils/stats/filterOutliers', () => {
  it('should discard outliers from a dataset', () => {
    const data = [1, 2, 2, 3, 1, 2, 20, 2, 2, 1, 3];
    const filteredMean = filterOutliers(data, 3, 'mean');
    const filteredMedian = filterOutliers(data, 3, 'median');

    expect(filteredMean).not.toContain(20);
    expect(filteredMedian).not.toContain(20);
  });

  it('should handle corner cases', () => {
    expect(filterOutliers([])).toStrictEqual([]);
  });
});
