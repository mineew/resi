import { type ReactNode } from 'react';

import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';

import styles from './RightSidebar.module.css';

interface RightSidebarProps {
  children: ReactNode;
  footer: ReactNode;
}

function RightSidebar(props: RightSidebarProps) {
  const { children, footer } = props;

  return (
    <div className={styles.wrapper}>
      <ScrollArea className={styles.body}>{children}</ScrollArea>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}

export default RightSidebar;
