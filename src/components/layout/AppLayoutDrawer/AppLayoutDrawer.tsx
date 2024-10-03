import { ChevronsRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Drawer from '@/components/ui/Drawer/Drawer';

import styles from './AppLayoutDrawer.module.css';

interface AppLayoutDrawerProps {
  children: ReactNode;
}

function AppLayoutDrawer(props: AppLayoutDrawerProps) {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Drawer
      className={styles.drawer}
      overlayClassName={styles.overlay}
      title={t('RESI_FILE_LIST.TITLE')}
      tooltip={t('RESI_FILE_LIST.OPEN_SIDEBAR')}
      trigger={
        <Button icon outlined>
          <ChevronsRight />
        </Button>
      }
      triggerClassName={styles['toggle-button']}
    >
      {children}
    </Drawer>
  );
}

export default AppLayoutDrawer;
