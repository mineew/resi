import { useCallback, useState } from 'react';

import Dialog from '@/components/ui/Dialog/Dialog';
import { type Settings } from '@/store/types/Settings';

import RESIFileChartSettingsForm from './RESIFileChartSettingsForm';

interface RESIFileChartSettingsProps {
  values?: Settings;
  onChange: (values: Settings) => void;
  children: JSX.Element;
}

function RESIFileChartSettings(props: RESIFileChartSettingsProps) {
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
        <RESIFileChartSettingsForm
          defaultValues={values}
          onSubmit={handleChange}
        />
      ) : null}
    </Dialog>
  );
}

export default RESIFileChartSettings;
