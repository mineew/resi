let globalInputElement: HTMLInputElement | undefined;

function getInputElement(options: ShowOpenFilePickerOptions) {
  const { types, multiple = false } = options;

  if (!globalInputElement) {
    globalInputElement = document.createElement('input');
  }

  globalInputElement.type = 'file';
  globalInputElement.multiple = multiple || false;

  globalInputElement.accept =
    types
      ?.map((t) => t.accept)
      .flatMap((t) => Object.keys(t).flatMap((k) => t[k]))
      .join(',') || '';

  return globalInputElement;
}

function convertFileToFileHandle(file: File): FileSystemFileHandle {
  return {
    getFile: () => {
      return new Promise((resolve) => {
        resolve(file);
      });
    },
  } as FileSystemFileHandle;
}

function showOpenFilePickerPolyfill(options: ShowOpenFilePickerOptions) {
  return new Promise<FileSystemFileHandle[]>((resolve) => {
    const input = getInputElement(options);

    const changeHandler = () => {
      const files = input.files || [];
      const handlers = [...files].map(convertFileToFileHandle);
      resolve(handlers);
      input.removeEventListener('change', changeHandler);
    };

    input.addEventListener('change', changeHandler);
    input.click();
  });
}

if (typeof window.showOpenFilePicker !== 'function') {
  window.showOpenFilePicker = showOpenFilePickerPolyfill;
}

export { showOpenFilePickerPolyfill };
