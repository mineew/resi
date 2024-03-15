/// <reference types="vite/client" />

interface Window {
  showOpenFilePicker: (options: {
    multiple?: boolean;
  }) => Promise<FileSystemFileHandle[]>;
}
