import * as Radix from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { type ReactNode, useCallback } from 'react';

import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Dialog.module.css';

interface DialogProps {
  trigger: JSX.Element;
  tooltip?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: '400' | '600' | '800';
  scrollable?: boolean;
}

function Dialog(props: DialogProps) {
  const {
    trigger,
    tooltip,
    open,
    onOpenChange,
    title,
    children,
    footer,
    size = '400',
    scrollable = false,
  } = props;

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
    <Radix.Root open={open} onOpenChange={onOpenChange}>
      {tooltip ? (
        <Tooltip title={tooltip}>{triggerElement}</Tooltip>
      ) : (
        triggerElement
      )}

      <Radix.Portal>
        <Radix.Overlay className="overlay" />

        <Radix.Content
          className={classNames(
            'dialog',
            'shadow',
            styles.content,
            styles[`size-${size}`],
            { [styles.scrollable]: scrollable },
          )}
          onCloseAutoFocus={handleCloseAutoFocus}
          aria-describedby={undefined}
        >
          <div className={styles.header}>
            <Radix.Title className={styles.title}>{title}</Radix.Title>

            <Radix.Close asChild>
              <button className={styles.close} type="button">
                <X />
              </button>
            </Radix.Close>
          </div>

          <ScrollArea className={styles.body}>{children}</ScrollArea>

          {footer && <div className={styles.footer}>{footer}</div>}
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default Dialog;
