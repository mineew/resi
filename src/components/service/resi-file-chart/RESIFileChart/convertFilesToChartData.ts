import { type RESIFile } from '@/store/types/RESIFile';

function convertFilesToChartData(files: RESIFile[], scale = 1) {
  const data: Array<Record<string, number>> = [];

  let maxX = 0;
  let maxY = 0;

  const lengths = files.map((f) => f.contents.length);
  const maxLength = Math.max(...lengths);

  for (let i = 0; i < maxLength; i += 1) {
    const x = (i * scale) / 1000;
    const dataItem: Record<string, number> = { x };

    if (x > maxX) {
      maxX = x;
    }

    for (const file of files) {
      const y = file.contents[i] ?? null;
      dataItem[file.name] = y;

      if (y !== null && y > maxY) {
        maxY = y;
      }
    }

    data.push(dataItem);
  }

  return { data, maxX, maxY };
}

export default convertFilesToChartData;
