import { create } from 'zustand';

import { DEFAULT_SETTINGS } from './types/Settings';
import { type StoreState } from './types/StoreState';

const useStore = create<StoreState>()((set, get) => ({
  files: [],
  setFiles: (files) => {
    set({ files });
  },

  addFiles: (files) => {
    const storedFiles = get().files;
    const newFiles = [...storedFiles];

    for (const file of files) {
      const storedFile = newFiles.find((f) => f.name == file.name);

      if (storedFile) {
        storedFile.contents = file.contents;
      } else {
        newFiles.push(file);
      }
    }

    newFiles.sort((a, b) => a.name.localeCompare(b.name));

    set({ files: newFiles });
  },

  isAddingFiles: false,
  setIsAddingFiles: (isAddingFiles) => {
    set({ isAddingFiles });
  },

  isFetchingFiles: false,
  setIsFetchingFiles: (isFetchingFiles) => {
    set({ isFetchingFiles });
  },

  deleteAllFiles: () => {
    set({ files: [] });
  },

  checkAllFiles: () => {
    const files = get().files;
    const newFiles = files.map((file) => ({ ...file, checked: true }));

    set({ files: newFiles });
  },

  uncheckAllFiles: () => {
    const files = get().files;
    const newFiles = files.map((file) => ({ ...file, checked: false }));

    set({ files: newFiles });
  },

  changeFileColor: (idx, color) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx] = { ...newFiles[idx], color };

    set({ files: newFiles });
  },

  changeFileStrokeWidth: (idx, width) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx] = { ...newFiles[idx], strokeWidth: width };

    set({ files: newFiles });
  },

  toggleFile: (idx, checked) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx] = { ...newFiles[idx], checked };

    set({ files: newFiles });
  },

  deleteFile: (idx) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles.splice(idx, 1);

    set({ files: newFiles });
  },

  settings: DEFAULT_SETTINGS,
  setSettings: (settings) => {
    set({ settings });
  },
  setOffsetLeft: (offsetLeft) => {
    set((state) => ({ settings: { ...state.settings, offsetLeft } }));
  },
  setOffsetRight: (offsetRight) => {
    set((state) => ({ settings: { ...state.settings, offsetRight } }));
  },
}));

export default useStore;
