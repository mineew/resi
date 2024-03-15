import { create } from 'zustand';

interface RESIFile {
  name: string;
  contents: number[];
}

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;
}

const useStore = create<StoreState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));

export default useStore;
export type { RESIFile, StoreState };
