import { type ReactNode } from 'react';

import styles from './AppHeader.module.css';

interface AppHeaderProps {
  children: ReactNode;
}

function AppHeader(props: AppHeaderProps) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}

export default AppHeader;
