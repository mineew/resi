import { type RESIFile } from './RESIFile';

interface RESIFileDiff {
  fileA: RESIFile;
  fileB: RESIFile;
  diff: number;
}

export type { RESIFileDiff };
