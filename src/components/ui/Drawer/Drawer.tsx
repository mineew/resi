import * as Radix from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { useCallback, type JSX, type ReactNode } from 'react';

import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Drawer.module.css';

interface DrawerProps {
  title: string;
  children: ReactNode;
  trigger: JSX.Element;
  tooltip?: string;
  className?: string;
  overlayClassName?: string;
  triggerClassName?: string;
}

function Drawer(props: DrawerProps) {
  const {
    title,
    trigger,
    tooltip,
    children,
    className,
    overlayClassName,
    triggerClassName,
  } = props;

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
        <Tooltip title={tooltip} triggerClassName={triggerClassName}>
          <Radix.Trigger asChild>{trigger}</Radix.Trigger>
        </Tooltip>
      ) : (
        <Radix.Trigger className={triggerClassName} asChild>
          {trigger}
        </Radix.Trigger>
      )}

      <Radix.Portal>
        <Radix.Overlay className={classNames('overlay', overlayClassName)} />

        <Radix.Content
          aria-describedby={undefined}
          className={classNames(styles.content, className)}
          onCloseAutoFocus={handleCloseAutoFocus}
        >
          <VisuallyHidden.Root asChild>
            <Radix.Title>{title}</Radix.Title>
          </VisuallyHidden.Root>

          <div className={styles.header}>
            <Radix.Close asChild>
              <button type="button" className={styles.close}>
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
