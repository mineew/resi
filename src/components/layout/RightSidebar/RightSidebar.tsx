import { type ReactNode } from 'react';

import styles from './RightSidebar.module.css';

interface RightSidebarProps {
  children: ReactNode;
  footer: ReactNode;
}

function RightSidebar(props: RightSidebarProps) {
  const { children, footer } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}

export default RightSidebar;
