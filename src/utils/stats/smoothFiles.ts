import { type RESIFile } from '@/store/types/RESIFile';
import { type Settings } from '@/store/types/Settings';

import smoothData from './smoothData';

function smoothFile(file: RESIFile, settings?: Settings): RESIFile {
  return {
    ...file,
    contents: smoothData(file.contents, settings),
  };
}

function smoothFiles(files: RESIFile[], settings?: Settings): RESIFile[] {
  return files.map((f) => smoothFile(f, settings));
}

export default smoothFiles;
