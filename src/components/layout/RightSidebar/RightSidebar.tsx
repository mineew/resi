import { type ReactNode } from 'react';

import styles from './RightSidebar.module.css';

interface RightSidebarProps {
  children: ReactNode;
}

function RightSidebar(props: RightSidebarProps) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

export default RightSidebar;
