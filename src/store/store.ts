import { create } from 'zustand';

import { DEFAULT_SMOOTH_DATA_OPTIONS } from './types/SmoothDataOptions';
import { type StoreState } from './types/StoreState';

const useStore = create<StoreState>((set, get) => ({
  files: [],
  setFiles: (files) => set({ files }),

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
