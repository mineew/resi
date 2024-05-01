import { type RESIFile } from './RESIFile';
import { type Settings } from './Settings';

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;

  addFiles: (files: RESIFile[]) => void;
  deleteAllFiles: () => void;
  checkAllFiles: () => void;
  uncheckAllFiles: () => void;

  changeFileColor: (idx: number, color: string) => void;
  changeFileStrokeWidth: (idx: number, width: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
  deleteFile: (idx: number) => void;

  settings: Settings;
  setSettings: (settings: Settings) => void;
  setOffsetLeft: (offsetLeft: number) => void;
  setOffsetRight: (offsetRight: number) => void;
}

export type { StoreState };
