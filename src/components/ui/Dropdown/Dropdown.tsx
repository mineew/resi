import * as Radix from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';

import Button from '@/components/ui/Button/Button';

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
}

function Dropdown(props: DropdownProps) {
  const { items, trigger } = props;

  return (
    <Radix.Root>
      <Radix.Trigger asChild>
        {trigger || (
          <Button
            className={classNames(styles.trigger, styles.default)}
            outlined
          >
            <ChevronDown className={styles['trigger-icon']} />
          </Button>
        )}
      </Radix.Trigger>

      <Radix.Portal>
        <Radix.Content
          className={styles.content}
          side="bottom"
          sideOffset={6}
          align="start"
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
