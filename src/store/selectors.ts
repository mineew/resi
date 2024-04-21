import calculateFileDifferences from '@/utils/stats/calculateFileDifferences';
import smoothFiles from '@/utils/stats/smoothFiles';

import { type StoreState } from './types/StoreState';

const files = (state: StoreState) => state.files;
const setFiles = (state: StoreState) => state.setFiles;

const addFiles = (state: StoreState) => state.addFiles;
const deleteAllFiles = (state: StoreState) => state.deleteAllFiles;
const checkAllFiles = (state: StoreState) => state.checkAllFiles;
const uncheckAllFiles = (state: StoreState) => state.uncheckAllFiles;

const changeFileColor = (state: StoreState) => state.changeFileColor;
const changeFileStrokeWidth = (state: StoreState) =>
  state.changeFileStrokeWidth;
const toggleFile = (state: StoreState) => state.toggleFile;
const deleteFile = (state: StoreState) => state.deleteFile;

const settings = (state: StoreState) => state.settings;
const setSettings = (state: StoreState) => state.setSettings;

const checkedFiles = (state: StoreState) => {
  return files(state).filter((f) => f.checked);
};

const smoothedFiles = (state: StoreState) => {
  return smoothFiles(checkedFiles(state), settings(state));
};

const smoothChunkSize = (state: StoreState) => {
  return settings(state).chunkSize;
};

const fileDiffs = (state: StoreState) => {
  return calculateFileDifferences(smoothedFiles(state), settings(state));
};

export {
  files,
  setFiles,
  addFiles,
  deleteAllFiles,
  checkAllFiles,
  uncheckAllFiles,
  changeFileColor,
  changeFileStrokeWidth,
  toggleFile,
  deleteFile,
  settings,
  setSettings,
  checkedFiles,
  smoothedFiles,
  smoothChunkSize,
  fileDiffs,
};
