import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';
import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';

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

  for (let i = 1; i < files.length; i += 1) {
    const fileA = files[i];
    const fileB = files[i - 1];
    const diff = calculateFileDifference(fileA, fileB, options);

    diffs.push({ fileA, fileB, diff });
  }

  return diffs;
}

export default calculateFileDifferences;
