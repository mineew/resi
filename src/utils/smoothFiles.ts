import { type RESIFile } from '@/store/store';

import { type SmoothDataOptions, smoothData } from './smoothData';

function smoothFile(file: RESIFile, options?: SmoothDataOptions): RESIFile {
  return {
    ...file,
    contents: smoothData(file.contents, options),
  };
}

function smoothFiles(
  files: RESIFile[],
  options?: SmoothDataOptions,
): RESIFile[] {
  return files.map((f) => smoothFile(f, options));
}

export { smoothFile, smoothFiles };
