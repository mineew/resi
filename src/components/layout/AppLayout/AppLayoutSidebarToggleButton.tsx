import classNames from 'classnames';
import { ArrowLeftToLine } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './AppLayout.module.css';

interface AppLayoutSidebarToggleButtonProps {
  isCollapsed: boolean;
  controls?: string;
  onClick: () => void;
}

function AppLayoutSidebarToggleButton(
  props: AppLayoutSidebarToggleButtonProps,
) {
  const { isCollapsed, controls, onClick } = props;
  const { t } = useTranslation();

  return (
    <Tooltip
      title={
        isCollapsed
          ? t('APP_LAYOUT.EXPAND_SIDEBAR')
          : t('APP_LAYOUT.COLLAPSE_SIDEBAR')
      }
      triggerClassName={classNames(styles['file-list-toggle-button'], {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <Button
        aria-expanded={!isCollapsed}
        aria-controls={controls}
        onClick={onClick}
        outlined
        icon
      >
        <ArrowLeftToLine />
      </Button>
    </Tooltip>
  );
}

export default AppLayoutSidebarToggleButton;
