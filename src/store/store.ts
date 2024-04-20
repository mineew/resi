import { create } from 'zustand';

import { DEFAULT_SMOOTH_DATA_OPTIONS } from './types/SmoothDataOptions';
import { type StoreState } from './types/StoreState';

const useStore = create<StoreState>((set, get) => ({
  files: [],
  setFiles: (files) => set({ files }),

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
    newFiles[idx].color = color;

    set({ files: newFiles });
  },

  changeFileStrokeWidth: (idx, width) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx].strokeWidth = width;

    set({ files: newFiles });
  },

  toggleFile: (idx, checked) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx].checked = checked;

    set({ files: newFiles });
  },

  deleteFile: (idx) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles.splice(idx, 1);

    set({ files: newFiles });
  },

  smoothDataOptions: DEFAULT_SMOOTH_DATA_OPTIONS,
  setSmoothDataOptions: (smoothDataOptions) => set({ smoothDataOptions }),
}));

export default useStore;
