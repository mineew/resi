import { type RESIFile } from './RESIFile';

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;
  changeFileColor: (idx: number, color: string) => void;
  changeFileStrokeWidth: (idx: number, width: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
  deleteFile: (idx: number) => void;
}

export type { StoreState };
