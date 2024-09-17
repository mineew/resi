import { type ReactNode } from 'react';

import styles from './AppLayoutCharts.module.css';

interface AppLayoutChartsProps {
  fileChart: ReactNode;
  diffChart: ReactNode;
  growthChart: ReactNode;
}

function AppLayoutCharts(props: AppLayoutChartsProps) {
  const { fileChart, diffChart, growthChart } = props;

  return (
    <div className={styles.charts}>
      <div className={styles['file-chart']}>{fileChart}</div>

      <div className={styles['derived-charts']}>
        <div>{diffChart}</div>
        <div>{growthChart}</div>
      </div>
    </div>
  );
}

export default AppLayoutCharts;
