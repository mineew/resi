import { useCallback, useState } from 'react';

import Dialog from '@/components/ui/Dialog/Dialog';
import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';

import RESIFileChartSettingsForm from './RESIFileChartSettingsForm';

interface RESIFileChartSettingsProps {
  values?: SmoothDataOptions;
  onChange: (values: SmoothDataOptions) => void;
  children: JSX.Element;
}

function RESIFileChartSettings(props: RESIFileChartSettingsProps) {
  const { values = {}, onChange, children } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = useCallback(
    (values: SmoothDataOptions) => {
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
