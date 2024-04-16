import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';
import {
  DEFAULT_SMOOTH_DATA_OPTIONS,
  type SmoothDataOptions,
} from '@/store/types/SmoothDataOptions';

import calculateDataDifference from './calculateDataDifference';

function calculateFileDifference(
  a: RESIFile,
  b: RESIFile,
  options: SmoothDataOptions = {},
) {
  return calculateDataDifference(a.contents, b.contents, options);
}

function calculateFileDifferences(
  files: RESIFile[],
  options: SmoothDataOptions = {},
): RESIFileDiff[] {
  const diffs: RESIFileDiff[] = [];
  const { chunkSize = DEFAULT_SMOOTH_DATA_OPTIONS.chunkSize } = options;

  let totalDiff = 0;
  let totalDistance = 0;

  for (let i = 1; i < files.length; i += 1) {
    const fileA = files[i];
    const fileB = files[i - 1];
    const diff = calculateFileDifference(fileA, fileB, options);
    const distance = (fileB.contents.length * chunkSize) / 100;

    totalDiff += diff;
    totalDistance += (fileB.contents.length * chunkSize) / 100;

    diffs.push({
      fileA,
      fileB,
      diff,
      totalDiff,
      distance,
      totalDistance,
    });
  }

  return diffs;
}

export default calculateFileDifferences;
