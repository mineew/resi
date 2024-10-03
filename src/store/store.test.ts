/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { renderHook, waitFor } from '@testing-library/react';

import type { RESIFile } from '@/store/types/RESIFile';

import useStore from './store';
import { DEFAULT_SETTINGS } from './types/Settings';

const file1: RESIFile = {
  color: 'red',
  name: 'File 1',
  strokeWidth: 1,
  checked: false,
  contents: [3, 3, 6, 6, 6, 4],
};

const file2: RESIFile = {
  name: 'File 2',
  color: 'green',
  strokeWidth: 1,
  checked: false,
  contents: [5, 5, 5, 3, 1, 7],
};

const file3: RESIFile = {
  color: 'blue',
  name: 'File 3',
  strokeWidth: 1,
  checked: false,
  contents: [4, 4, 8, 12, 3, 17],
};

const files = [file1, file2, file3];

describe('@/store/store', () => {
  it('can set files', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files).toHaveLength(0);
    await waitFor(() => result.current.setFiles(files));
    expect(result.current.files).toHaveLength(3);
  });

  it('can add files', async () => {
    const { result } = renderHook(() => useStore());
    const newFiles = files.map((f, i) => ({ ...f, name: `File ${i + 1 + 3}` }));

    expect(result.current.files).toHaveLength(3);
    await waitFor(() => result.current.addFiles(newFiles));
    expect(result.current.files).toHaveLength(6);
  });

  it('can toggle adding files status', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.isAddingFiles).toBeFalsy();
    await waitFor(() => result.current.setIsAddingFiles(true));
    expect(result.current.isAddingFiles).toBeTruthy();
  });

  it('can toggle fetching files status', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.isFetchingFiles).toBeFalsy();
    await waitFor(() => result.current.setIsFetchingFiles(true));
    expect(result.current.isFetchingFiles).toBeTruthy();
  });

  it('can update files', async () => {
    const { result } = renderHook(() => useStore());
    const updatedFile2 = { ...file2, contents: [10] };

    expect(result.current.files[1].contents).toStrictEqual(file2.contents);
    await waitFor(() => result.current.addFiles([updatedFile2]));
    expect(result.current.files[1].contents).toStrictEqual([10]);
  });

  it('can delete all files', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files).toHaveLength(6);
    await waitFor(() => result.current.deleteAllFiles());
    expect(result.current.files).toHaveLength(0);
  });

  it('can check all files', async () => {
    const { result } = renderHook(() => useStore());

    await waitFor(() => result.current.addFiles(files));
    expect(result.current.files.filter((f) => f.checked)).toHaveLength(0);
    await waitFor(() => result.current.checkAllFiles());
    expect(result.current.files.filter((f) => f.checked)).toHaveLength(3);
  });

  it('can uncheck all files', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files.filter((f) => f.checked)).toHaveLength(3);
    await waitFor(() => result.current.uncheckAllFiles());
    expect(result.current.files.filter((f) => f.checked)).toHaveLength(0);
  });

  it('can change file color', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files[1]).toHaveProperty('color', 'green');
    await waitFor(() => result.current.changeFileColor(1, 'black'));
    expect(result.current.files[1]).toHaveProperty('color', 'black');
  });

  it('can change file stroke width', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files[1]).toHaveProperty('strokeWidth', 1);
    await waitFor(() => result.current.changeFileStrokeWidth(1, 3));
    expect(result.current.files[1]).toHaveProperty('strokeWidth', 3);
  });

  it('can toggle file', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files[1].checked).toBe(false);
    await waitFor(() => result.current.toggleFile(1, true));
    expect(result.current.files[1].checked).toBe(true);
  });

  it('can delete file', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.files).toHaveLength(3);
    await waitFor(() => result.current.deleteFile(1));
    expect(result.current.files).toHaveLength(2);
  });

  it('has default app settings', () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.settings).toStrictEqual(DEFAULT_SETTINGS);
  });

  it('can change app settings', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.settings.chunkSize).toBe(300);

    await waitFor(() =>
      result.current.setSettings({
        ...DEFAULT_SETTINGS,
        chunkSize: 1500,
      }),
    );

    expect(result.current.settings.chunkSize).toBe(1500);
  });

  it('can change left offset', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.settings.offsetLeft).toBe(20);
    await waitFor(() => result.current.setOffsetLeft(150));
    expect(result.current.settings.offsetLeft).toBe(150);
  });

  it('can change right offset', async () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.settings.offsetRight).toBe(200);
    await waitFor(() => result.current.setOffsetRight(350));
    expect(result.current.settings.offsetRight).toBe(350);
  });
});
