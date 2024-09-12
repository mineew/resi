import * as Radix from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { type ReactNode, useCallback } from 'react';

import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Drawer.module.css';

interface DrawerProps {
  trigger: JSX.Element;
  tooltip?: string;
  children: ReactNode;
}

function Drawer(props: DrawerProps) {
  const { trigger, tooltip, children } = props;
  const triggerElement = <Radix.Trigger asChild>{trigger}</Radix.Trigger>;

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
        <Radix.Overlay className="overlay" />

        <Radix.Content
          className={styles.content}
          onCloseAutoFocus={handleCloseAutoFocus}
          aria-describedby={undefined}
        >
          <div className={styles.header}>
            <Radix.Close asChild>
              <button className={styles.close} type="button">
                <X />
              </button>
            </Radix.Close>
          </div>

          <div className={styles.body}>{children}</div>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default Drawer;
