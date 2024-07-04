import openFiles from './openFiles';

const showOpenFilePicker = vi
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve([
      {
        getFile: () =>
          Promise.resolve({
            name: 'File 1',
            text: () => Promise.resolve('File 1 Text'),
          }),
      },
      {
        getFile: () =>
          Promise.resolve({
            name: 'File 2',
            text: () => Promise.resolve('File 2 Text'),
          }),
      },
      {
        getFile: () =>
          Promise.resolve({
            name: 'File 3',
            text: () => Promise.resolve('File 3 Text'),
          }),
      },
    ]),
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error('showOpenFilePicker Error')),
  );

beforeAll(() => {
  vi.stubGlobal('showOpenFilePicker', showOpenFilePicker);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/utils/resi-files/openFiles', () => {
  it('should open RESI files using the native file picker', async () => {
    const files = await openFiles();

    expect(showOpenFilePicker).toHaveBeenCalledOnce();

    expect(files).toStrictEqual({
      'File 1': 'File 1 Text',
      'File 2': 'File 2 Text',
      'File 3': 'File 3 Text',
    });
  });

  it('should handle errors', async () => {
    const files = await openFiles();

    expect(files).toBe(null);
  });
});
