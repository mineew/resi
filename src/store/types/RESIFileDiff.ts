import { type RESIFile } from './RESIFile';

interface RESIFileDiff {
  fileA: RESIFile;
  fileB: RESIFile;
  diff: number;
  totalDiff: number;
  distance: number;
  totalDistance: number;
}

export type { RESIFileDiff };
