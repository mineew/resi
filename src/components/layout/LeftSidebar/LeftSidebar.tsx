import { type ReactNode } from 'react';

import styles from './LeftSidebar.module.css';

interface LeftSidebarProps {
  header: ReactNode;
  children: ReactNode;
}

function LeftSidebar(props: LeftSidebarProps) {
  const { header, children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default LeftSidebar;
