import { type RESIFile } from '@/store/types/RESIFile';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';
import calculateDataDifference from '@/utils/stats/calculateDataDifference';

function calculateFileDifferences(
  files: RESIFile[],
  chunkSize = 300,
  differenceMeanMethod?: 'mean' | 'median',
  takeNegativeDiffs?: boolean,
): RESIFileDiff[] {
  const diffs: RESIFileDiff[] = [];

  let totalDiff = 0;
  let totalDistance = 0;

  for (let i = 1; i < files.length; i += 1) {
    const fileA = files[i];
    const fileB = files[i - 1];
    const diff = calculateDataDifference(
      fileA.contents,
      fileB.contents,
      differenceMeanMethod,
      takeNegativeDiffs,
    );
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
