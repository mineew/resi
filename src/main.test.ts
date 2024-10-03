const mocks = vi.hoisted(() => ({
  render: vi.fn(),
  createRoot: () => ({ render: mocks.render }),
}));

vi.mock('react-dom/client', () => ({
  createRoot: mocks.createRoot,
}));

describe('@/main', () => {
  it('renders entire app', async () => {
    vi.stubEnv('DEV', false);

    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    await import('./main');

    expect(mocks.render).toHaveBeenCalledTimes(1);
  }, 30_000);

  it('does not render if there is no container', async () => {
    vi.stubEnv('DEV', false);
    mocks.render.mockClear();

    await import('./main');

    expect(mocks.render).toHaveBeenCalledTimes(0);
  });
});
