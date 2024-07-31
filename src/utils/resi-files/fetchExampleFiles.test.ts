import fetchExampleFiles from './fetchExampleFiles';

const fetchMock = vi.fn();

beforeAll(() => {
  vi.stubGlobal('fetch', fetchMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/utils/resi-files/fetchExampleFiles', () => {
  it('should fetch example RESI files', async () => {
    fetchMock.mockImplementation(() =>
      Promise.resolve({
        text: () => Promise.resolve(''),
      }),
    );

    await fetchExampleFiles();
    expect(fetchMock).toHaveBeenCalledTimes(10);
  });

  it('should fetch in both envs', async () => {
    fetchMock.mockImplementation(() =>
      Promise.resolve({
        text: () => Promise.resolve(''),
      }),
    );

    vi.stubEnv('DEV', true);
    await fetchExampleFiles();
    expect(fetchMock).toHaveBeenLastCalledWith('app/example-data/File-010.xls');

    vi.stubEnv('DEV', false);
    await fetchExampleFiles();
    expect(fetchMock).toHaveBeenLastCalledWith('example-data/File-010.xls');

    vi.unstubAllEnvs();
  });

  it('should handle errors', async () => {
    fetchMock.mockImplementation(() => () => Promise.reject());
    const files = await fetchExampleFiles();

    expect(files).toBe(null);
  });
});
