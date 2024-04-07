import { type RESIFile } from './RESIFile';

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;
  deleteFile: (idx: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
  changeFileColor: (idx: number, color: string) => void;
}

export type { StoreState };
