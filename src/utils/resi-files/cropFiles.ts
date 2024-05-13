import { type RESIFile } from '@/store/types/RESIFile';
import cropArray from '@/utils/arrays/cropArray';

function cropFiles(files: RESIFile[], offsetLeft = 0, offsetRight = 0) {
  return files.map((file) => ({
    ...file,
    contents: cropArray(file.contents, offsetLeft, offsetRight),
  }));
}

export default cropFiles;
