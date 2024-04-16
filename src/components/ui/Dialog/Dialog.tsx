import * as Radix from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { type ReactNode } from 'react';

import styles from './Dialog.module.css';

interface DialogProps {
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  children: ReactNode;
  size?: '400' | '600' | '800';
}

function Dialog(props: DialogProps) {
  const { trigger, open, onOpenChange, title, children, size = '400' } = props;

  return (
    <Radix.Root open={open} onOpenChange={onOpenChange}>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>

      <Radix.Portal>
        <Radix.Overlay className={styles.overlay} />

        <Radix.Content
          className={classNames(styles.content, styles[`size-${size}`])}
        >
          <div className={styles.header}>
            <Radix.Title className={styles.title}>{title}</Radix.Title>

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

export default Dialog;
