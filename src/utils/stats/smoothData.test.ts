import smoothData from './smoothData';

describe('@/utils/stats/smoothData', () => {
  it('should split a dataset on chunks', () => {
    const dataset = [2, 4, 2, 4, 2, 4];
    const smoothed = smoothData(dataset, 3, 'mean', 2, 'median');

    expect(smoothed.length).toBe(3);
  });

  it('should return an array of average values of chunks', () => {
    const dataset = [2, 4, 2, 4, 2, 4];
    const smoothed = smoothData(dataset, 3, 'mean', 2, 'mean');

    expect(smoothed).toStrictEqual([3, 3, 3]);
  });

  it('should discard outliers', () => {
    const dataset = [
      ...[1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1],
      ...[8, 7, 9, 8, 7, 7, 8, 120, 8, 8, 9, 9, 8],
      ...[5, 4, 4, 4, 5, 3, 3, 80, 4, 4, 4, 3, 5],
    ];
    const smoothed = smoothData(dataset, 3, 'mean', 13, 'mean');

    expect(smoothed).toStrictEqual([1, 8, 4]);
  });

  it('should handle corner cases', () => {
    expect(smoothData([])).toStrictEqual([]);
  });
});
