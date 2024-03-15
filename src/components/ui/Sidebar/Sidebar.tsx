import { type ReactNode } from 'react';

import styles from './Sidebar.module.css';

interface SidebarProps {
  header: ReactNode;
  children: ReactNode;
}

function Sidebar(props: SidebarProps) {
  const { header, children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default Sidebar;
