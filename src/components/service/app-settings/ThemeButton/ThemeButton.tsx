import { Moon, Sun } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import type { Theme } from './Theme';

import styles from './ThemeButton.module.css';

interface ThemeButtonProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const ThemeButton = memo((props: ThemeButtonProps) => {
  const { theme, onToggleTheme } = props;
  const { t } = useTranslation();

  return (
    <Tooltip
      title={
        theme === 'dark'
          ? t('THEME.ENABLE_LIGHT_THEME')
          : t('THEME.ENABLE_DARK_THEME')
      }
      className={styles.tooltip}
    >
      <Button onClick={onToggleTheme} icon outlined>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </Tooltip>
  );
});

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton;
