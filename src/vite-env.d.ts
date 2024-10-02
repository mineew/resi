/// <reference types="vite/client" />

interface ShowOpenFilePickerOptions {
  excludeAcceptAllOption?: boolean;
  multiple?: boolean;
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
