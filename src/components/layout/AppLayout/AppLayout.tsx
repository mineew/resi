import { type ReactNode } from 'react';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  left: ReactNode;
  header: ReactNode;
  body: ReactNode;
  right: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { left, header, body, right } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{left}</div>

      <div className={styles.content}>
        <div className={styles.header}>{header}</div>
        <div className={styles.body}>{body}</div>
      </div>

      <div className={styles.right}>{right}</div>
    </div>
  );
}

export default AppLayout;
