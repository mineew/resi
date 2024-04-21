import { Settings } from 'lucide-react';

import RESIFileChart from '@/components/service/resi-file-chart/RESIFileChart/RESIFileChart';
import RESIFileChartEmpty from '@/components/service/resi-file-chart/RESIFileChartEmpty/RESIFileChartEmpty';
import RESIFileChartSettings from '@/components/service/resi-file-chart/RESIFileChartSettings/RESIFileChartSettings';
import Button from '@/components/ui/Button/Button';
import { type RESIFile } from '@/store/types/RESIFile';
import { type SmoothDataOptions } from '@/store/types/SmoothDataOptions';

import styles from './RESIFileChartPanel.module.css';

interface RESIFileChartPanelProps {
  files: RESIFile[];
  chartScale?: number;
  settings?: SmoothDataOptions;
  onChangeSettings: (settings: SmoothDataOptions) => void;
}

function RESIFileChartPanel(props: RESIFileChartPanelProps) {
  const { files, chartScale, settings, onChangeSettings } = props;

  if (!files.length) {
    return <RESIFileChartEmpty />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <RESIFileChartSettings values={settings} onChange={onChangeSettings}>
          <Button outlined>
            <Settings /> Настройки графика
          </Button>
        </RESIFileChartSettings>
      </div>

      <div className={styles.chart}>
        <RESIFileChart files={files} scale={chartScale} />
      </div>
    </div>
  );
}

export default RESIFileChartPanel;
