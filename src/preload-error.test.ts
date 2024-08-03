import './preload-error';

const locationMock = {
  reload: vi.fn(),
};

beforeAll(() => {
  vi.stubGlobal('location', locationMock);

  return () => {
    vi.unstubAllGlobals();
  };
});

describe('@/preload-error', () => {
  it('handles vite:preloadError events', () => {
    const event = new Event('vite:preloadError');
    window.dispatchEvent(event);

    expect(locationMock.reload).toHaveBeenCalledTimes(1);
  });
});
