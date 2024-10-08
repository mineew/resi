import type { RESIFile } from '@/store/types/RESIFile';

import smoothFiles from './smoothFiles';

const file1: RESIFile = {
  color: 'red',
  checked: true,
  name: 'File 1',
  strokeWidth: 1,
  contents: [3, 3, 6, 6, 6, 4],
};

const file2: RESIFile = {
  checked: true,
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  contents: [5, 5, 5, 3, 1, 7],
};

const file3: RESIFile = {
  color: 'blue',
  checked: true,
  name: 'File 3',
  strokeWidth: 1,
  contents: [4, 4, 8, 12, 3, 17],
};

describe('@/utils/resi-files/smoothFiles', () => {
  it('should smooth out resistograms', () => {
    const smoothed = smoothFiles([file1, file2, file3], 3, 'mean', 2, 'mean');
    const contents1 = smoothed[0].contents;
    const contents2 = smoothed[1].contents;
    const contents3 = smoothed[2].contents;

    expect(contents1).toStrictEqual([3, 6, 5]);
    expect(contents2).toStrictEqual([5, 4, 4]);
    expect(contents3).toStrictEqual([4, 10, 10]);
  });
});
