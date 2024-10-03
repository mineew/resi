/// <reference types="vite/client" />

interface ShowOpenFilePickerOptions {
  multiple?: boolean;
  excludeAcceptAllOption?: boolean;
  types?: {
    description?: string;
    accept: Record<string, string[]>;
  }[];
}

interface Window {
  showOpenFilePicker: (
    options: ShowOpenFilePickerOptions,
  ) => Promise<FileSystemFileHandle[]>;
}
