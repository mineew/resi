import { Settings } from 'lucide-react';

import AppSettingsView from '@/components/service/app-settings/AppSettings/AppSettings';
import Button from '@/components/ui/Button/Button';
import useStore from '@/store/store';

function AppSettings() {
  const settings = useStore((state) => state.settings);
  const setSettings = useStore((state) => state.setSettings);

  return (
    <AppSettingsView values={settings} onChange={setSettings}>
      <Button icon outlined>
        <Settings />
      </Button>
    </AppSettingsView>
  );
}

export default AppSettings;
