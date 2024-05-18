import useCurrentTheme from '@/components/app/useCurrentTheme';
import ThemeButton from '@/components/service/app-settings/ThemeButton/ThemeButton';

import styles from './AppToolbar.module.css';

function AppToolbar() {
  const { theme, toggleTheme } = useCurrentTheme();

  return (
    <div className={styles.wrapper}>
      <ThemeButton theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}

export default AppToolbar;
