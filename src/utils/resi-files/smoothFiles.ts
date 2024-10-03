import type { RESIFile } from '@/store/types/RESIFile';
import smoothData from '@/utils/stats/smoothData';

function smoothFiles(
  files: RESIFile[],
  zScoreThreshold?: number,
  zScoreMeanMethod?: 'mean' | 'median',
  chunkSize?: number,
  chunkAggregateMethod?: 'mean' | 'median',
): RESIFile[] {
  return files.map((file) => ({
    ...file,

    contents: smoothData(
      file.contents,
      zScoreThreshold,
      zScoreMeanMethod,
      chunkSize,
      chunkAggregateMethod,
    ),
  }));
}

export default smoothFiles;
