interface Settings {
  zScoreThreshold?: number;
  zScoreMeanMethod?: 'mean' | 'median';
  chunkSize?: number;
  chunkAggregateMethod?: 'mean' | 'median';
  differenceMeanMethod?: 'mean' | 'median';
  takeNegativeDiffs?: boolean;
  growthMeanMethod?: 'mean' | 'median';
  takeNegativeGrowth?: boolean;
  offsetLeft?: number;
  offsetRight?: number;
}

const DEFAULT_SETTINGS: Required<Settings> = {
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  chunkSize: 300,
  chunkAggregateMethod: 'mean',
  differenceMeanMethod: 'mean',
  takeNegativeDiffs: false,
  growthMeanMethod: 'mean',
  takeNegativeGrowth: false,
  offsetLeft: 20,
  offsetRight: 200,
};

export { DEFAULT_SETTINGS };
export type { Settings };
