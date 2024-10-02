function diffArrays(a: number[], b: number[], takeNegativeDiffs = false) {
  const diffs: number[] = [];
  const length = Math.max(a.length, b.length);

  for (let i = 0; i < length; i += 1) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (a[i] !== undefined && b[i] !== undefined) {
      const diff = a[i] - b[i];

      if (diff < 0 && !takeNegativeDiffs) {
        diffs.push(0);
      } else {
        diffs.push(diff);
      }
    }
  }

  return diffs;
}

export default diffArrays;
