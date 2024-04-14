import { type RESIFile } from '@/store/types/RESIFile';
import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';

import smoothData from './smoothData';

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

export default smoothFiles;
