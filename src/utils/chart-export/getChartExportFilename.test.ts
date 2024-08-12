import getChartExportFilename from './getChartExportFilename';

describe('@/utils/chart-export/getChartExportFilename', () => {
  it('create an image filename from chart title', () => {
    const filename = getChartExportFilename(
      'Wear of cutting edges of drill bit',
    );

    expect(filename).toBe('wear-of-cutting-edges-of-drill-bit.png');
  });
});
