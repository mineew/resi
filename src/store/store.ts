import { create } from 'zustand';

import { type StoreState } from './StoreState';

const useStore = create<StoreState>((set) => ({
  files: [],

  setFiles: (files) => set({ files }),

  deleteFile: (idx) =>
    set((state) => {
      const newFiles = [...state.files];
      newFiles.splice(idx, 1);

      return { ...state, files: newFiles };
    }),

  toggleFile: (idx, checked) =>
    set((state) => {
      const newFiles = [...state.files];
      newFiles[idx].checked = checked;

      return { ...state, files: newFiles };
    }),
}));

export default useStore;
