interface Settings {
  chunkSize?: number;
  offsetGap?: number;
  offsetLeft?: number;
  offsetRight?: number;
  zScoreThreshold?: number;
  takeNegativeDiffs?: boolean;
  takeNegativeGrowth?: boolean;
  renderChunksOnChart?: boolean;
  zScoreMeanMethod?: 'mean' | 'median';
  growthMeanMethod?: 'mean' | 'median';
  chunkAggregateMethod?: 'mean' | 'median';
  differenceMeanMethod?: 'mean' | 'median';
}

const DEFAULT_SETTINGS: Required<Settings> = {
  offsetGap: 10,
  chunkSize: 300,
  offsetLeft: 20,
  offsetRight: 200,
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  takeNegativeDiffs: false,
  growthMeanMethod: 'mean',
  takeNegativeGrowth: false,
  renderChunksOnChart: false,
  chunkAggregateMethod: 'mean',
  differenceMeanMethod: 'mean',
};

export { DEFAULT_SETTINGS };
export type { Settings };
