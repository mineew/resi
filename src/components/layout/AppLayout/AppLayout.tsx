import classNames from 'classnames';
import { type ReactNode, useCallback, useState } from 'react';

import styles from './AppLayout.module.css';
import AppLayoutSidebarToggleButton from './AppLayoutSidebarToggleButton';

interface AppLayoutProps {
  fileList: ReactNode;
  fileChart: ReactNode;
  diffChart: ReactNode;
  growthChart: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { fileList, fileChart, diffChart, growthChart } = props;
  const [fileListIsCollapsed, setFileListIsCollapsed] = useState(false);

  const fileListId = 'resi-file-list';

  const handleToggleFileList = useCallback(() => {
    setFileListIsCollapsed((collapsed) => !collapsed);
  }, []);

  return (
    <div className={styles.wrapper} data-testid="app-layout">
      <div
        className={classNames(styles['file-list'], {
          [styles.collapsed]: fileListIsCollapsed,
        })}
        id={fileListId}
      >
        {fileList}
      </div>

      <AppLayoutSidebarToggleButton
        isCollapsed={fileListIsCollapsed}
        controls={fileListId}
        onClick={handleToggleFileList}
      />

      <div className={styles.charts}>
        <div className={styles['file-chart']}>{fileChart}</div>

        <div className={styles['derived-charts']}>
          <div>{diffChart}</div>
          <div>{growthChart}</div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
