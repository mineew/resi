import { type RESIFile } from './RESIFile';
import { type SmoothDataOptions } from './SmoothDataOptions';

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;
  changeFileColor: (idx: number, color: string) => void;
  changeFileStrokeWidth: (idx: number, width: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
  deleteFile: (idx: number) => void;

  smoothDataOptions: SmoothDataOptions;
  setSmoothDataOptions: (options: SmoothDataOptions) => void;
}

export type { StoreState };
