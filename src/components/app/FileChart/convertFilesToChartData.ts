import { type RESIFile } from '@/store/store';

function convertFilesToChartData(files: RESIFile[]) {
  const data: Array<Record<string, number>> = [];

  const lengths = files.map((f) => f.contents.length);
  const maxLength = Math.max(...lengths);

  for (let i = 0; i < maxLength; i += 1) {
    const dataItem: Record<string, number> = { x: i / 100 };

    for (const file of files) {
      dataItem[file.name] = file.contents[i] ?? null;
    }

    data.push(dataItem);
  }

  return data;
}

export default convertFilesToChartData;
