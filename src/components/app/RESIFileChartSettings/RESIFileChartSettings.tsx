import { Settings } from 'lucide-react';

import RESIFileChartSettingsView from '@/components/service/RESIFileChartSettings/RESIFileChartSettings';
import Button from '@/components/ui/Button/Button';

function RESIFileChartSettings() {
  return (
    <RESIFileChartSettingsView onChange={() => undefined}>
      <Button outlined>
        <Settings /> Настройки графика
      </Button>
    </RESIFileChartSettingsView>
  );
}

export default RESIFileChartSettings;
