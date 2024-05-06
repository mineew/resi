function cropArray<T>(array: T[], offsetLeft?: number, offsetRight?: number) {
  let cropped = array;

  if (offsetLeft) {
    cropped = cropped.slice(offsetLeft);
  }

  if (offsetRight) {
    cropped = cropped.slice(0, -(array.length - offsetRight - 1));
  }

  return cropped;
}

export default cropArray;
