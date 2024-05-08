import * as Radix from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Dropdown.module.css';

interface DropdownItem {
  id: string;
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
  danger?: boolean;
  disabled?: boolean;
}

interface DropdownProps {
  items: Array<DropdownItem | 'separator'>;
  trigger?: JSX.Element;
  tooltip?: string;
}

function Dropdown(props: DropdownProps) {
  const { items, trigger, tooltip } = props;

  const defaultTriggerButton = (
    <Button className={styles.trigger} icon outlined>
      <ChevronDown className={styles['trigger-icon']} />
    </Button>
  );

  const triggerElement = (
    <Radix.Trigger asChild>{trigger || defaultTriggerButton}</Radix.Trigger>
  );

  const handleCloseAutoFocus = useCallback(
    (e: Event) => {
      if (tooltip) {
        e.preventDefault();
      }
    },
    [tooltip],
  );

  return (
    <Radix.Root>
      {tooltip ? (
        <Tooltip title={tooltip}>{triggerElement}</Tooltip>
      ) : (
        triggerElement
      )}

      <Radix.Portal>
        <Radix.Content
          className={classNames(styles.content, 'shadow')}
          side="bottom"
          sideOffset={6}
          align="start"
          onCloseAutoFocus={handleCloseAutoFocus}
        >
          {items.map((item, idx) => {
            if (item === 'separator') {
              return (
                <Radix.Separator
                  className={styles.separator}
                  key={`separator-${idx}`}
                />
              );
            }

            return (
              <Radix.Item
                className={classNames(styles.item, {
                  [styles.danger]: item.danger,
                })}
                key={item.id}
                onSelect={item.onClick}
                disabled={item.disabled}
              >
                {item.icon}
                {item.label}
              </Radix.Item>
            );
          })}
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default Dropdown;
export type { DropdownItem };
