import * as Radix from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import { useCallback, type JSX } from 'react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Dropdown.module.css';

interface DropdownItem {
  id: string;
  label: string;
  onClick: () => void;
  danger?: boolean;
  icon?: JSX.Element;
  selected?: boolean;
  disabled?: boolean;
}

interface DropdownProps {
  items: ('separator' | DropdownItem)[];
  tooltip?: string;
  trigger?: JSX.Element;
  fullWidthContent?: boolean;
  defaultTriggerTitle?: string;
  defaultTriggerClassName?: string;
  align?: DropdownMenuContentProps['align'];
}

function Dropdown(props: DropdownProps) {
  const {
    items,
    tooltip,
    trigger,
    align = 'start',
    defaultTriggerTitle,
    defaultTriggerClassName,
    fullWidthContent = true,
  } = props;

  const defaultTriggerButton = (
    <Button
      icon
      outlined
      className={classNames(styles.trigger, defaultTriggerClassName)}
    >
      {defaultTriggerTitle}
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
          side="bottom"
          align={align}
          sideOffset={6}
          onCloseAutoFocus={handleCloseAutoFocus}
          className={classNames(
            styles.content,
            {
              [styles['full-width']]: fullWidthContent,
            },
            'shadow',
          )}
        >
          {items.map((item, idx) => {
            if (item === 'separator') {
              return (
                <Radix.Separator
                  // eslint-disable-next-line react/no-array-index-key
                  key={`separator-${idx}`}
                  className={styles.separator}
                />
              );
            }

            return (
              <Radix.Item
                key={item.id}
                onSelect={item.onClick}
                disabled={item.disabled}
                className={classNames(styles.item, {
                  [styles.danger]: item.danger,
                  [styles.selected]: item.selected,
                })}
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
