interface SmoothDataOptions {
  zScoreThreshold?: number;
  zScoreMeanMethod?: 'mean' | 'median';
  chunkSize?: number;
  chunkAggregateMethod?: 'mean' | 'median';
}

const DEFAULT_SMOOTH_DATA_OPTIONS: Required<SmoothDataOptions> = {
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  chunkSize: 250,
  chunkAggregateMethod: 'mean',
};

export { DEFAULT_SMOOTH_DATA_OPTIONS };
export type { SmoothDataOptions };
