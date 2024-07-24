import processFiles from './processFiles';

describe('@/utils/resi-files/processFiles', () => {
  it('should get and parse RESI files', async () => {
    const getFiles = vi.fn(() =>
      Promise.resolve({
        'File 1': 'File 1 Contents',
      }),
    );
    const files = await processFiles(getFiles);

    expect(getFiles).toHaveBeenCalledTimes(1);
    expect(files).toHaveLength(1);
  });

  it('should handle null result', async () => {
    const getFiles = vi.fn(() => Promise.resolve(null));
    const files = await processFiles(getFiles);

    expect(files).toStrictEqual([]);
  });
});
