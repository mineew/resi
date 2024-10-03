import type { RESIFile } from '@/store/types/RESIFile';

import calculateFileGrowth from './calculateFileGrowth';

const file1: RESIFile = {
  color: 'red',
  checked: true,
  name: 'File 1',
  strokeWidth: 1,
  contents: [1, 2, 8],
};

const file2: RESIFile = {
  checked: true,
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  contents: [4, 5, 11],
};

const file3: RESIFile = {
  color: 'blue',
  checked: true,
  name: 'File 3',
  strokeWidth: 1,
  contents: [10, 11, 17],
};

describe('@/utils/resi-files/calculateFileGrowth', () => {
  it('should calculate the RESI files growth', () => {
    const diffs = calculateFileGrowth([file1, file2, file3], 1);
    const growth = diffs.map((d) => d.growth);

    expect(growth).toStrictEqual([1, 7]);
  });

  it('can discard negative growth', () => {
    const files = [
      { ...file1, contents: [8, 2, 1] },
      { ...file2, contents: [11, 5, 4] },
      { ...file3, contents: [10, 5, 0] },
    ];

    const negative = calculateFileGrowth(files, 1, 'median', true);
    const discarded = calculateFileGrowth(files, 1, 'median', false);

    expect(negative.map((d) => d.growth)).toStrictEqual([-6, -7]);
    expect(discarded.map((d) => d.growth)).toStrictEqual([]);
  });
});
