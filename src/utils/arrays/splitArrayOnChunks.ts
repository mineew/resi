function splitArrayOnChunks<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];

  if (!chunkSize || chunkSize <= 0) {
    return [];
  }

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}

export default splitArrayOnChunks;
