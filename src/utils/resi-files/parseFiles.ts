import type { RESIFile } from '@/store/types/RESIFile';

const HEADER_ROWS = 25;
const DEFAULT_FILE_COLOR = '';
const DEFAULT_FILE_STROKE_WIDTH = 1;
const DEFAULT_FILE_CHECKED = true;

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
      contents,
      color: DEFAULT_FILE_COLOR,
      checked: DEFAULT_FILE_CHECKED,
      strokeWidth: DEFAULT_FILE_STROKE_WIDTH,
      name: name.replace('.xls', '').replace(/^0*/, ''),
    });
  }

  return resiFiles;
}

export default parseFiles;
