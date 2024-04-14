import smoothFiles from '@/utils/stats/smoothFiles';

import { type StoreState } from './types/StoreState';

const files = (state: StoreState) => state.files;
const setFiles = (state: StoreState) => state.setFiles;
const changeFileColor = (state: StoreState) => state.changeFileColor;
const changeFileStrokeWidth = (state: StoreState) =>
  state.changeFileStrokeWidth;
const toggleFile = (state: StoreState) => state.toggleFile;
const deleteFile = (state: StoreState) => state.deleteFile;
const smoothDataOptions = (state: StoreState) => state.smoothDataOptions;
const setSmoothDataOptions = (state: StoreState) => state.setSmoothDataOptions;

const checkedFiles = (state: StoreState) => {
  return state.files.filter((f) => f.checked);
};

const smoothedFiles = (state: StoreState) => {
  return smoothFiles(checkedFiles(state), state.smoothDataOptions);
};

const smoothChunkSize = (state: StoreState) => {
  return state.smoothDataOptions.chunkSize;
};

export {
  files,
  setFiles,
  changeFileColor,
  changeFileStrokeWidth,
  toggleFile,
  deleteFile,
  smoothDataOptions,
  setSmoothDataOptions,
  checkedFiles,
  smoothedFiles,
  smoothChunkSize,
};
