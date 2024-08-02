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
    await import('./main');

    expect(mocks.render).toHaveBeenCalledTimes(1);
  });
});
