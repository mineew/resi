import { type Theme } from './Theme';

function getThemeFromLS(): Theme | undefined {
  const theme = window.localStorage?.getItem('theme');

  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
}

function saveThemeToLS(theme: Theme) {
  window.localStorage?.setItem('theme', theme);
}

export { getThemeFromLS, saveThemeToLS };
