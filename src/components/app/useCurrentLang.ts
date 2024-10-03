import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { LangDropdownItem } from '@/components/service/app-settings/LangDropdown/LangDropdown';

function useCurrentLang() {
  const { i18n } = useTranslation();

  const langs = useMemo(
    (): LangDropdownItem[] => [
      { id: 'en', label: 'English' },
      { id: 'ru', label: 'Русский' },
    ],
    [],
  );

  const selectedLang = i18n.language;

  const changeSelectedLang = useCallback(
    (lang: string) => {
      void i18n.changeLanguage(lang);
    },
    [i18n],
  );

  return { langs, selectedLang, changeSelectedLang };
}

export default useCurrentLang;
