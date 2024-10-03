import type { RESIFile } from '@/store/types/RESIFile';

import calculateFileDifferences from './calculateFileDifferences';

const file1: RESIFile = {
  color: 'red',
  checked: true,
  name: 'File 1',
  strokeWidth: 1,
  contents: [1, 1, 1],
};

const file2: RESIFile = {
  checked: true,
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  contents: [6, 6, 6],
};

const file3: RESIFile = {
  color: 'blue',
  checked: true,
  name: 'File 3',
  strokeWidth: 1,
  contents: [16, 16, 16],
};

describe('@/utils/resi-files/calculateFileDifferences', () => {
  it('should calculate the difference between RESI files', () => {
    const diffs = calculateFileDifferences([file1, file2, file3], 1);

    expect(diffs.map((d) => d.diff)).toStrictEqual([5, 10]);
    expect(diffs.map((d) => d.totalDiff)).toStrictEqual([5, 15]);
  });
});
