import createRandomRESIFile from '@/utils/misc/createRandomRESIFile';

import cropFiles from './cropFiles';

describe('@/utils/resi-files/cropFiles', () => {
  it('should crop RESI files', () => {
    const file1 = createRandomRESIFile('File 1', { contentsLength: 10 });
    const file2 = createRandomRESIFile('File 1', { contentsLength: 11 });
    const file3 = createRandomRESIFile('File 1', { contentsLength: 12 });
    const files = [file1, file2, file3];

    const cropped = cropFiles(files, 1, 8);

    expect(cropped[0].contents).toHaveLength(7);
    expect(cropped[1].contents).toHaveLength(7);
    expect(cropped[2].contents).toHaveLength(7);
  });
});
