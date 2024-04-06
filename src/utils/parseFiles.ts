import { type RESIFile } from '@/store/store';

const HEADER_ROWS = 25;

function parseFiles(files: Record<string, string>): RESIFile[] {
  const resiFiles: RESIFile[] = [];

  for (const name of Object.keys(files)) {
    const text = files[name];

    const contents: number[] = text
      .split('\n')
      .slice(HEADER_ROWS, -1)
      .map((line) => line.trim())
      .map((i) => Number(i));

    resiFiles.push({
      name: name.replace('.xls', ''),
      contents,
      color: '#000000',
      checked: true,
    });
  }

  return resiFiles;
}

export default parseFiles;
