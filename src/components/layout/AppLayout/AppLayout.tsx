import { type ReactNode } from 'react';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { sidebar, children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default AppLayout;
