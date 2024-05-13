import { type Theme } from './Theme';

function getSystemTheme(): Theme {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

export default getSystemTheme;
