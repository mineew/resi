import { type ReactNode } from 'react';

import styles from './LeftSidebar.module.css';

interface LeftSidebarProps {
  header: ReactNode;
  body: ReactNode;
}

function LeftSidebar(props: LeftSidebarProps) {
  const { header, body } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
}

export default LeftSidebar;
