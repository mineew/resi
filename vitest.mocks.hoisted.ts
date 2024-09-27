/* eslint-disable @typescript-eslint/no-explicit-any */

import { vi } from 'vitest';

import { type StoreState } from './src/store/types/StoreState';

const commonMocks = vi.hoisted(() => ({
  storeState: {
    files: [
      {
        name: 'File 1',
        color: 'red',
        strokeWidth: 1,
        checked: true,
        contents: [3, 3, 6, 6, 6, 4],
      },
      {
        name: 'File 2',
        color: 'green',
        strokeWidth: 1,
        checked: true,
        contents: [5, 5, 5, 3, 1, 7],
      },
      {
        name: 'File 3',
        color: 'blue',
        strokeWidth: 1,
        checked: true,
        contents: [4, 4, 8, 12, 3, 17],
      },
    ],
    setFiles: vi.fn(),
    addFiles: vi.fn(),
    isAddingFiles: false,
    setIsAddingFiles: vi.fn(),
    isFetchingFiles: false,
    setIsFetchingFiles: vi.fn(),
    deleteAllFiles: vi.fn(),
    checkAllFiles: vi.fn(),
    uncheckAllFiles: vi.fn(),
    changeFileColor: vi.fn(),
    changeFileStrokeWidth: vi.fn(),
    toggleFile: vi.fn(),
    deleteFile: vi.fn(),
    settings: {
      chunkSize: 1,
    },
    setSettings: vi.fn(),
    setOffsetLeft: vi.fn(),
    setOffsetRight: vi.fn(),
  } satisfies StoreState,

  changeLanguage: vi.fn(),

  useTranslation: vi.fn<(...args: any[]) => any>(() => ({
    i18n: { language: 'en', changeLanguage: commonMocks.changeLanguage },
    t: (message: string) => message,
  })),
}));

vi.mock('@/store/store', () => ({
  default: (selector: (state: StoreState) => unknown) => {
    return selector(commonMocks.storeState);
  },
}));

vi.mock('react-i18next', () => ({
  useTranslation: commonMocks.useTranslation,
}));

export { commonMocks };
