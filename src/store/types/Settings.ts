interface Settings {
  zScoreThreshold?: number;
  zScoreMeanMethod?: 'mean' | 'median';
  chunkSize?: number;
  chunkAggregateMethod?: 'mean' | 'median';
  differenceMeanMethod?: 'mean' | 'median';
  offsetLeft?: number;
  offsetRight?: number;
  takeNegativeDiffs?: boolean;
}

const DEFAULT_SETTINGS: Required<Settings> = {
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  chunkSize: 300,
  chunkAggregateMethod: 'mean',
  differenceMeanMethod: 'mean',
  offsetLeft: 20,
  offsetRight: 200,
  takeNegativeDiffs: true,
};

export { DEFAULT_SETTINGS };
export type { Settings };
