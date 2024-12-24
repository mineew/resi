import type { ReactNode } from 'react';

import AppLayoutCharts from '@/components/layout/AppLayoutCharts/AppLayoutCharts';
import AppLayoutDrawer from '@/components/layout/AppLayoutDrawer/AppLayoutDrawer';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  fileList: ReactNode;
  fileChart: ReactNode;
  filesInit: ReactNode;
  diffChart: ReactNode;
  appToolbar: ReactNode;
  growthChart: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { fileList, fileChart, filesInit, diffChart, appToolbar, growthChart } =
    props;

  return (
    <div className={styles.layout}>
      <div className={styles.header}>{appToolbar}</div>

      <div data-testid="app-layout" className={styles.wrapper}>
        <div className={styles['file-list']}>{fileList}</div>

        <AppLayoutCharts
          filesInit={filesInit}
          diffChart={diffChart}
          growthChart={growthChart}
          fileChart={
            <>
              <div className={styles['app-toolbar']}>{appToolbar}</div>
              {fileChart}
            </>
          }
        />
      </div>

      <AppLayoutDrawer>{fileList}</AppLayoutDrawer>
    </div>
  );
}

export default AppLayout;
