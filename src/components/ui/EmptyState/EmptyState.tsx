import type { ReactNode } from 'react';

import styles from './EmptyState.module.css';

interface EmptyStateProps {
  icon: ReactNode;
  children: ReactNode;
}

function EmptyState(props: EmptyStateProps) {
  const { icon, children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.icon}>{icon}</div>
        {children}
      </div>
    </div>
  );
}

export default EmptyState;
