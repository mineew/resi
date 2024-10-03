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
  items: (DropdownItem | 'separator')[];
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
      className={classNames(styles.trigger, defaultTriggerClassName)}
      icon
      outlined
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
          className={classNames(
            styles.content,
            {
              [styles['full-width']]: fullWidthContent,
            },
            'shadow',
          )}
          side="bottom"
          sideOffset={6}
          align={align}
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
                  [styles.selected]: item.selected,
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
