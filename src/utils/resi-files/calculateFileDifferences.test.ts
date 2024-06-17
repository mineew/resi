import { type RESIFile } from '@/store/types/RESIFile';

import calculateFileDifferences from './calculateFileDifferences';

const file1: RESIFile = {
  name: 'File 1',
  color: 'red',
  strokeWidth: 1,
  checked: true,
  contents: [1, 1, 1],
};

const file2: RESIFile = {
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  checked: true,
  contents: [6, 6, 6],
};

const file3: RESIFile = {
  name: 'File 3',
  color: 'blue',
  strokeWidth: 1,
  checked: true,
  contents: [16, 16, 16],
};

describe('@/utils/resi-files/calculateFileDifferences', () => {
  it('should calculate the difference between RESI files', () => {
    const diffs = calculateFileDifferences([file1, file2, file3], 1);

    expect(diffs.map((d) => d.diff)).toStrictEqual([5, 10]);
    expect(diffs.map((d) => d.totalDiff)).toStrictEqual([5, 15]);
  });
});
