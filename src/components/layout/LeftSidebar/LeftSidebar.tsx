import { type ReactNode } from 'react';

import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';

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
      <ScrollArea className={styles.body}>{children}</ScrollArea>
    </div>
  );
}

export default LeftSidebar;
