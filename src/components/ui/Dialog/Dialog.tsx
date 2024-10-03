import * as Radix from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { useCallback, type JSX, type ReactNode } from 'react';

import ScrollArea from '@/components/ui/ScrollArea/ScrollArea';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import styles from './Dialog.module.css';

interface DialogProps {
  title: string;
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  tooltip?: string;
  footer?: ReactNode;
  scrollable?: boolean;
  size?: '400' | '600' | '800';
  onOpenChange?: (open: boolean) => void;
}

function Dialog(props: DialogProps) {
  const {
    open,
    title,
    footer,
    trigger,
    tooltip,
    children,
    size = '400',
    scrollable = false,
    onOpenChange,
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
