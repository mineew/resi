import getChartExportFilename from './getChartExportFilename';

describe('@/utils/svg-to-png/getChartExportFilename', () => {
  it('create an image filename from chart title', () => {
    const filename = getChartExportFilename(
      'Wear of cutting edges of drill bit',
    );

    expect(filename).toBe('wear-of-cutting-edges-of-drill-bit.png');
  });
});
