import { LineChart } from 'lucide-react';

import styles from './RESIFileChartEmpty.module.css';

function RESIFileChartEmpty() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <LineChart className={styles.icon} strokeWidth={1} />

        <div className={styles.description}>
          Недостаточно данных для построения графика. Откройте RESI файлы
        </div>
      </div>
    </div>
  );
}

export default RESIFileChartEmpty;
