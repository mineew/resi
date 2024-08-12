function getChartExportFilename(chartTitle: string) {
  const filename = chartTitle
    .split(' ')
    .map((part) => part.trim())
    .map((part) => part.toLowerCase())
    .join('-');

  return `${filename}.png`;
}

export default getChartExportFilename;
