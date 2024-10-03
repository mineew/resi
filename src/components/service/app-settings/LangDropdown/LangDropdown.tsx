import { memo } from 'react';

import Dropdown, { type DropdownItem } from '@/components/ui/Dropdown/Dropdown';

interface LangDropdownItem {
  id: string;
  label: string;
}

interface LangDropdownProps {
  selectedLang: string;
  langs: LangDropdownItem[];
  onChangeSelectedLang: (lang: string) => void;
}

const LangDropdown = memo((props: LangDropdownProps) => {
  const { langs, selectedLang, onChangeSelectedLang } = props;

  const dropdownItems: DropdownItem[] = langs.map((lang) => ({
    id: lang.id,
    label: lang.label,
    selected: lang.id === selectedLang,
    onClick: () => {
      onChangeSelectedLang(lang.id);
    },
  }));

  return (
    <Dropdown
      items={dropdownItems}
      defaultTriggerTitle={selectedLang.toUpperCase()}
    />
  );
});

LangDropdown.displayName = 'LangDropdown';

export default LangDropdown;
export type { LangDropdownItem };
