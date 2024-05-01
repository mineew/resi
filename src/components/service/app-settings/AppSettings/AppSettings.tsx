import { memo, useCallback, useState } from 'react';

import AppSettingsForm from '@/components/service/app-settings/AppSettingsForm/AppSettingsForm';
import Dialog from '@/components/ui/Dialog/Dialog';
import { type Settings } from '@/store/types/Settings';

interface AppSettingsProps {
  values?: Settings;
  onChange: (values: Settings) => void;
  children: JSX.Element;
}

const AppSettings = memo((props: AppSettingsProps) => {
  const { values = {}, onChange, children } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = useCallback(
    (values: Settings) => {
      setDialogOpen(false);
      onChange(values);
    },
    [onChange],
  );

  return (
    <Dialog
      trigger={children}
      open={dialogOpen}
      onOpenChange={setDialogOpen}
      title="Настройки графика"
      size="400"
    >
      {dialogOpen ? (
        <AppSettingsForm defaultValues={values} onSubmit={handleChange} />
      ) : null}
    </Dialog>
  );
});

AppSettings.displayName = 'AppSettings';

export default AppSettings;
