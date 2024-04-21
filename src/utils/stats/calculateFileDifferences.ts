import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';

import calculateDataDifference from './calculateDataDifference';

function calculateFileDifference(
  a: RESIFile,
  b: RESIFile,
  settings: Settings = {},
) {
  return calculateDataDifference(a.contents, b.contents, settings);
}

function calculateFileDifferences(
  files: RESIFile[],
  settings: Settings = {},
): RESIFileDiff[] {
  const diffs: RESIFileDiff[] = [];
  const { chunkSize = DEFAULT_SETTINGS.chunkSize } = settings;

  let totalDiff = 0;
  let totalDistance = 0;

  for (let i = 1; i < files.length; i += 1) {
    const fileA = files[i];
    const fileB = files[i - 1];
    const diff = calculateFileDifference(fileA, fileB, settings);
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
