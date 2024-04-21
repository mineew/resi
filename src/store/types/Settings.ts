interface Settings {
  zScoreThreshold?: number;
  zScoreMeanMethod?: 'mean' | 'median';
  chunkSize?: number;
  chunkAggregateMethod?: 'mean' | 'median';
  differenceMeanMethod?: 'mean' | 'median';
}

const DEFAULT_SETTINGS: Required<Settings> = {
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  chunkSize: 300,
  chunkAggregateMethod: 'mean',
  differenceMeanMethod: 'mean',
};

export { DEFAULT_SETTINGS };
export type { Settings };
