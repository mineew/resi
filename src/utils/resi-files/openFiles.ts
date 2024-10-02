async function openFiles() {
  try {
    const result: Record<string, string> = {};

    const handles = await window.showOpenFilePicker({
      excludeAcceptAllOption: true,
      multiple: true,
      types: [
        {
          description: 'RESI Files',
          accept: {
            'application/vnd.ms-excel': ['.xls'],
          },
        },
      ],
    });

    for (const handle of handles) {
      const file = await handle.getFile();
      const text = await file.text();

      result[file.name] = text;
    }

    return result;
  } catch {
    return null;
  }
}

export default openFiles;
