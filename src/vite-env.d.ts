/// <reference types="vite/client" />

interface ShowOpenFilePickerOptions {
  multiple?: boolean;
  excludeAcceptAllOption?: boolean;
  types?: {
    accept: Record<string, string[]>;
    description?: string;
  }[];
}

interface Window {
  showOpenFilePicker: (
    options: ShowOpenFilePickerOptions,
  ) => Promise<FileSystemFileHandle[]>;
}
