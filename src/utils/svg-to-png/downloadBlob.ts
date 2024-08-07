function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

export default downloadBlob;
