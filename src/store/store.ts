import { create } from 'zustand';

interface RESIFile {
  name: string;
  contents: number[];
  color: string;
  checked: boolean;
}

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;
  deleteFile: (idx: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
}

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
export type { RESIFile, StoreState };
