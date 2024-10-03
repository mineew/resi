import type { LineChartDataset } from './LineChartDataset';

function convertChartData(
  datasets: LineChartDataset[],
  xConverter = (x: number) => x,
) {
  const lines: Record<string, number | null>[] = [];

  let maxX = 0;
  let maxY = 0;

  const lengths = datasets.map((f) => f.contents.length);
  const maxLength = Math.max(...lengths);

  for (let i = 0; i < maxLength; i += 1) {
    const x = xConverter(i);
    const dataItem: Record<string, number | null> = { x };

    if (x > maxX) {
      maxX = x;
    }

    for (const line of datasets) {
      const lineContentsAtPoint = line.contents[i] as number | undefined;
      const y = lineContentsAtPoint ?? null;
      dataItem[line.name] = y;

      if (y !== null && y > maxY) {
        maxY = y;
      }
    }

    lines.push(dataItem);
  }

  return { maxX, maxY, lines };
}

export default convertChartData;
