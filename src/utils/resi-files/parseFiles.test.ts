import getRandomArray from '@/utils/misc/getRandomArray';

import parseFiles from './parseFiles';

const file1Contents = getRandomArray((idx) => idx, 50);
const file2Contents = getRandomArray((idx) => idx, 125);

const files: Record<string, string> = {
  ['0001.xls']: file1Contents.join('\n'),
  ['0002.xls']: file2Contents.join('\n'),
};

describe('@/utils/resi-files/parseFiles', () => {
  it('should parse a RESI file contents', () => {
    const resiFiles = parseFiles(files);

    expect(resiFiles[0].name).toBe('1');
    expect(resiFiles[0].contents).toStrictEqual(
      getRandomArray((idx) => idx + 25, 24),
    );

    expect(resiFiles[1].name).toBe('2');
    expect(resiFiles[1].contents).toStrictEqual(
      getRandomArray((idx) => idx + 25, 99),
    );
  });
});
