import { Settings } from 'lucide-react';

import RESIFileChartSettingsView from '@/components/service/RESIFileChartSettings/RESIFileChartSettings';
import Button from '@/components/ui/Button/Button';
import * as selectors from '@/store/selectors';
import useStore from '@/store/store';

function RESIFileChartSettings() {
  const smoothDataOptions = useStore(selectors.smoothDataOptions);
  const setSmoothDataOptions = useStore(selectors.setSmoothDataOptions);

  return (
    <RESIFileChartSettingsView
      values={smoothDataOptions}
      onChange={setSmoothDataOptions}
    >
      <Button outlined>
        <Settings /> Настройки графика
      </Button>
    </RESIFileChartSettingsView>
  );
}

export default RESIFileChartSettings;
