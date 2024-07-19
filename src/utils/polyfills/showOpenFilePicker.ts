let input: HTMLInputElement;

function getInputElement(options: ShowOpenFilePickerOptions) {
  const { multiple = false, types } = options;

  if (!input) {
    input = document.createElement('input');
  }

  input.type = 'file';
  input.multiple = multiple || false;

  input.accept =
    types
      ?.map((t) => t.accept)
      .flatMap((t) => Object.keys(t).flatMap((k) => t[k]))
      .join(',') || '';

  return input;
}

function convertFileToFileHandle(file: File): FileSystemFileHandle {
  return {
    getFile: () => new Promise((resolve) => resolve(file)),
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
