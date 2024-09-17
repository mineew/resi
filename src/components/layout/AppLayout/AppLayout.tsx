import { type ReactNode } from 'react';

import AppLayoutCharts from '@/components/layout/AppLayoutCharts/AppLayoutCharts';
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

        <AppLayoutCharts
          fileChart={fileChart}
          diffChart={diffChart}
          growthChart={growthChart}
        />
      </div>

      <AppLayoutDrawer>{fileList}</AppLayoutDrawer>
    </>
  );
}

export default AppLayout;
