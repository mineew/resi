import useCurrentLang from '@/components/app/useCurrentLang';
import useCurrentTheme from '@/components/app/useCurrentTheme';
import LangDropdown from '@/components/service/app-settings/LangDropdown/LangDropdown';
import ThemeButton from '@/components/service/app-settings/ThemeButton/ThemeButton';

import styles from './AppToolbar.module.css';

function AppToolbar() {
  const { theme, toggleTheme } = useCurrentTheme();
  const { langs, selectedLang, changeSelectedLang } = useCurrentLang();

  return (
    <div className={styles.wrapper} data-testid="app-toolbar">
      <ThemeButton theme={theme} onToggleTheme={toggleTheme} />

      <LangDropdown
        langs={langs}
        selectedLang={selectedLang}
        onChangeSelectedLang={changeSelectedLang}
      />
    </div>
  );
}

export default AppToolbar;
