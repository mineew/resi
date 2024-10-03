import downloadBlob from './downloadBlob';

const anchorElementMock = {
  href: '',
  download: '',
  click: vi.fn(),
  remove: vi.fn(),
};

const documentMock = {
  createElement: vi.fn(() => anchorElementMock),
};

const URLMock = {
  revokeObjectURL: vi.fn(),
  createObjectURL: vi.fn(() => 'URL'),
};

beforeAll(() => {
  vi.stubGlobal('document', documentMock);
  vi.stubGlobal('URL', URLMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/utils/chart-export/downloadBlob', () => {
  it('downloads a blob', () => {
    const blob = new Blob([JSON.stringify({ hello: 'world' })], {
      type: 'application/json',
    });

    downloadBlob(blob, 'example.json');

    expect(anchorElementMock.href).toBe(URLMock.createObjectURL());
    expect(anchorElementMock.download).toBe('example.json');
    expect(anchorElementMock.click).toHaveBeenCalledTimes(1);
    expect(anchorElementMock.remove).toHaveBeenCalledTimes(1);
    expect(URLMock.revokeObjectURL).toHaveBeenCalledTimes(1);
  });
});
