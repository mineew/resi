import classNames from 'classnames';
import { ArrowLeftToLine } from 'lucide-react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './AppLayout.module.css';

interface AppLayoutSidebarToggleButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

function AppLayoutSidebarToggleButton(
  props: AppLayoutSidebarToggleButtonProps,
) {
  const { isCollapsed, onClick } = props;

  return (
    <Tooltip
      title="COLLAPSE"
      triggerClassName={classNames(styles['file-list-toggle-button'], {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <Button onClick={onClick} outlined icon>
        <ArrowLeftToLine />
      </Button>
    </Tooltip>
  );
}

export default AppLayoutSidebarToggleButton;
