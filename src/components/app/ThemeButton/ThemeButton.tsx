import { Moon, Sun } from 'lucide-react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './ThemeButton.module.css';
import useCurrentTheme from './useCurrentTheme';

function ThemeButton() {
  const { theme, toggleTheme } = useCurrentTheme();

  return (
    <div className={styles.wrapper}>
      <Tooltip
        className={styles.tooltip}
        title={
          theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'
        }
      >
        <Button onClick={toggleTheme} outlined icon>
          {theme === 'dark' ? <Moon /> : <Sun />}
        </Button>
      </Tooltip>
    </div>
  );
}

export default ThemeButton;
