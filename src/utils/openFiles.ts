async function openFiles() {
  const handles = await window.showOpenFilePicker({ multiple: true });
  const result: Record<string, string> = {};

  for (const handle of handles) {
    const file = await handle.getFile();
    const text = await file.text();
    result[file.name] = text;
  }

  return result;
}

export default openFiles;
