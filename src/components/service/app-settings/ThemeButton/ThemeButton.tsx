import { Moon, Sun } from 'lucide-react';
import { memo } from 'react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import { type Theme } from './Theme';
import styles from './ThemeButton.module.css';

interface ThemeButtonProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const ThemeButton = memo((props: ThemeButtonProps) => {
  const { theme, onToggleTheme } = props;

  return (
    <Tooltip
      className={styles.tooltip}
      title={
        theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'
      }
    >
      <Button onClick={onToggleTheme} outlined icon>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </Tooltip>
  );
});

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton;
