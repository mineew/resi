async function openFiles() {
  try {
    const handles = await window.showOpenFilePicker({ multiple: true });
    const result: Record<string, string> = {};

    for (const handle of handles) {
      const file = await handle.getFile();
      const text = await file.text();
      result[file.name] = text;
    }

    return result;
  } catch (e) {
    return null;
  }
}

export default openFiles;
