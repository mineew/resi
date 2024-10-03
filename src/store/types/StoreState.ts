import type { RESIFile } from './RESIFile';
import type { Settings } from './Settings';

interface StoreState {
  files: RESIFile[];
  setFiles: (files: RESIFile[]) => void;

  addFiles: (files: RESIFile[]) => void;

  isAddingFiles: boolean;
  setIsAddingFiles: (isAddingFiles: boolean) => void;

  isFetchingFiles: boolean;
  setIsFetchingFiles: (isFetchingFiles: boolean) => void;

  checkAllFiles: () => void;
  deleteAllFiles: () => void;
  uncheckAllFiles: () => void;

  deleteFile: (idx: number) => void;
  toggleFile: (idx: number, checked: boolean) => void;
  changeFileColor: (idx: number, color: string) => void;
  changeFileStrokeWidth: (idx: number, width: number) => void;

  settings: Settings;
  setSettings: (settings: Settings) => void;
  setOffsetLeft: (offsetLeft: number) => void;
  setOffsetRight: (offsetRight: number) => void;
}

export type { StoreState };
