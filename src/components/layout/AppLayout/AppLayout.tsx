import { type ReactNode } from 'react';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
  left: ReactNode;
  body: ReactNode;
  right: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { left, body, right } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{left}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}

export default AppLayout;
