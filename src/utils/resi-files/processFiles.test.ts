import processFiles from './processFiles';

const mocks = vi.hoisted(() => ({
  openFiles: vi.fn(),
  parseFiles: vi.fn(),
}));

vi.mock('./openFiles', () => ({ default: mocks.openFiles }));
vi.mock('./parseFiles', () => ({ default: mocks.parseFiles }));

describe('@/utils/resi-files/processFiles', () => {
  it('should open and parse RESI files', async () => {
    await processFiles();

    expect(mocks.openFiles).toHaveBeenCalledTimes(1);
    expect(mocks.parseFiles).toHaveBeenCalledTimes(1);
  });
});
