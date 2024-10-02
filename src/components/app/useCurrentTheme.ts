import { useCallback, useEffect, useState } from 'react';

import { type Theme } from '@/components/service/app-settings/ThemeButton/Theme';

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

function getSystemTheme(): Theme {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

function getThemeFromLS(): Theme | undefined {
  const theme = window.localStorage.getItem('theme');

  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
}

function saveThemeToLS(theme: Theme) {
  window.localStorage.setItem('theme', theme);
}

export default useCurrentTheme;
