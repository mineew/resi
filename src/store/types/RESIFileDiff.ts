import type { RESIFile } from './RESIFile';

interface RESIFileDiff {
  diff: number;
  fileA: RESIFile;
  fileB: RESIFile;
  distance: number;
  totalDiff: number;
  totalDistance: number;
}

export type { RESIFileDiff };
