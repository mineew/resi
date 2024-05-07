import cropArray from './cropArray';

describe('@/utils/arrays/cropArray', () => {
  it('should crop an array on the left', () => {
    const array = [1, 2, 3, 4, 5];

    const notCropped = cropArray(array, 0);
    expect(notCropped).toStrictEqual(array);

    const cropped = cropArray(array, 2);
    expect(cropped).toStrictEqual([3, 4, 5]);
  });

  it('should crop an array on the right', () => {
    const array = [1, 2, 3, 4, 5];

    const notCropped = cropArray(array, 0, 0);
    expect(notCropped).toStrictEqual(array);

    const cropped = cropArray(array, 0, 2);
    expect(cropped).toStrictEqual([1, 2, 3]);
  });

  it('should crop an array on both sides', () => {
    const array = [1, 2, 3, 4, 5];

    const notCropped = cropArray(array, 0, 0);
    expect(notCropped).toStrictEqual(array);

    const cropped = cropArray(array, 2, 2);
    expect(cropped).toStrictEqual([3]);
  });

  it('should return an empty array if the left offset is too large', () => {
    const array = [1, 2, 3, 4, 5];

    const cropped = cropArray(array, 20);
    expect(cropped).toStrictEqual([]);
  });

  it('should return an array as is if the right offset is too large', () => {
    const array = [1, 2, 3, 4, 5];

    const cropped = cropArray(array, 0, 6);
    expect(cropped).toStrictEqual(array);
  });
});
