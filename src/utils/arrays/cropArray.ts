function cropArray<T>(array: T[], offsetLeft?: number, offsetRight?: number) {
  let cropped = array;

  if (offsetLeft && offsetLeft > 0) {
    cropped = cropped.slice(offsetLeft);
  }

  if (offsetRight && offsetRight > 0 && offsetRight < array.length) {
    cropped = cropped.slice(0, -(array.length - offsetRight));
  }

  return cropped;
}

export default cropArray;
