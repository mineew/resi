import { create } from 'zustand';

import { type StoreState } from './StoreState';

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
}));

export default useStore;
