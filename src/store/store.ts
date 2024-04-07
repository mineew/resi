import { create } from 'zustand';

import { type StoreState } from './StoreState';

const useStore = create<StoreState>((set, get) => ({
  files: [],

  setFiles: (files) => set({ files }),

  deleteFile: (idx) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles.splice(idx, 1);

    set({ files: newFiles });
  },

  toggleFile: (idx, checked) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx].checked = checked;

    set({ files: newFiles });
  },

  changeFileColor: (idx, color) => {
    const files = get().files;
    const newFiles = [...files];
    newFiles[idx].color = color;

    set({ files: newFiles });
  },
}));

export default useStore;
