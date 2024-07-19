describe('@/utils/polyfills/showOpenFilePicker', () => {
  it('should polyfill window.showOpenFilePicker', async () => {
    expect(window).not.toHaveProperty('showOpenFilePicker');
    await import('./showOpenFilePicker');
    expect(window).toHaveProperty('showOpenFilePicker');
  });
});
