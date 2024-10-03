import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import LangDropdown, { type LangDropdownItem } from './LangDropdown';

export const Default: StoryFn<typeof LangDropdown> = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  const langs: LangDropdownItem[] = [
    {
      id: 'en',
      label: 'English',
    },
    {
      id: 'ru',
      label: 'Русский',
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <LangDropdown
        langs={langs}
        selectedLang={selectedLang}
        onChangeSelectedLang={setSelectedLang}
      />
    </div>
  );
};

export default {
  component: LangDropdown,
  title: 'Components/Service/App Settings/LangDropdown',
  argTypes: {
    langs: { table: { disable: true } },
    selectedLang: { table: { disable: true } },
    onChangeSelectedLang: { table: { disable: true } },
  },
} as Meta<typeof LangDropdown>;
