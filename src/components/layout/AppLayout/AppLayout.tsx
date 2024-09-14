import { type ReactNode } from 'react';

import AppLayoutDrawer from '@/components/layout/AppLayoutDrawer/AppLayoutDrawer';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  fileList: ReactNode;
  fileChart: ReactNode;
  diffChart: ReactNode;
  growthChart: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { fileList, fileChart, diffChart, growthChart } = props;

  return (
    <>
      <div className={styles.wrapper} data-testid="app-layout">
        <div className={styles['file-list']}>{fileList}</div>

        <div className={styles.charts}>
          <div className={styles['file-chart']}>{fileChart}</div>

          <div className={styles['derived-charts']}>
            <div>{diffChart}</div>
            <div>{growthChart}</div>
          </div>
        </div>
      </div>

      <AppLayoutDrawer>{fileList}</AppLayoutDrawer>
    </>
  );
}

export default AppLayout;
