import exportChartToPng from './exportChartToPng';

const mocks = vi.hoisted(() => ({
  downloadBlob: vi.fn(),
  toBlob: vi.fn(() => Promise.resolve(new Blob())),
}));

vi.mock('html-to-image', () => ({
  toBlob: mocks.toBlob,
}));

vi.mock('./downloadBlob', () => ({
  default: mocks.downloadBlob,
}));

describe('@/utils/chart-export/exportChartToPng', () => {
  it('exports chart to png', async () => {
    const chartWrapper = document.createElement('div');
    const svgElement = document.createElement('svg');
    chartWrapper.append(svgElement);

    await exportChartToPng(chartWrapper, 'image.png', 1);

    expect(mocks.toBlob).toHaveBeenCalledTimes(1);
    expect(mocks.downloadBlob).toHaveBeenCalledTimes(1);
  });
});
