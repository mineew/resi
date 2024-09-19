import { type ReactNode } from 'react';

import AppLayoutCharts from '@/components/layout/AppLayoutCharts/AppLayoutCharts';
import AppLayoutDrawer from '@/components/layout/AppLayoutDrawer/AppLayoutDrawer';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  appToolbar: ReactNode;
  fileList: ReactNode;
  fileChart: ReactNode;
  diffChart: ReactNode;
  growthChart: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { appToolbar, fileList, fileChart, diffChart, growthChart } = props;

  return (
    <div className={styles.layout}>
      <div className={styles.header}>{appToolbar}</div>

      <div className={styles.wrapper} data-testid="app-layout">
        <div className={styles['file-list']}>{fileList}</div>

        <AppLayoutCharts
          fileChart={
            <>
              <div className={styles['app-toolbar']}>{appToolbar}</div>
              {fileChart}
            </>
          }
          diffChart={diffChart}
          growthChart={growthChart}
        />
      </div>

      <AppLayoutDrawer>{fileList}</AppLayoutDrawer>
    </div>
  );
}

export default AppLayout;
