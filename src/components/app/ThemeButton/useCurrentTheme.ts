import { useCallback, useEffect, useState } from 'react';

import { type Theme } from './Theme';
import getSystemTheme from './getSystemTheme';
import { getThemeFromLS, saveThemeToLS } from './storeThemeToLS';

function useCurrentTheme() {
  const [theme, setTheme] = useState<Theme>(
    getThemeFromLS() || getSystemTheme(),
  );

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    saveThemeToLS(newTheme);

    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  // 1) set theme at application initialization
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) toggle theme when system settings are changed
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';

      if (newTheme !== theme) {
        toggleTheme();
      }
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handler);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return { theme, toggleTheme };
}

export default useCurrentTheme;
