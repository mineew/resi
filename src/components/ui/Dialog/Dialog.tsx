import * as Radix from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { type ReactNode } from 'react';

import styles from './Dialog.module.css';

interface DialogProps {
  trigger: JSX.Element;
  title: string;
  description?: string;
  children: ReactNode;
}

function Dialog(props: DialogProps) {
  const { trigger, title, description, children } = props;

  return (
    <Radix.Root>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>

      <Radix.Portal>
        <Radix.Overlay className={styles.overlay} />

        <Radix.Content className={styles.content}>
          <Radix.Title className={styles.title}>{title}</Radix.Title>

          {description && (
            <Radix.Description className={styles.description}>
              {description}
            </Radix.Description>
          )}

          {children}

          <Radix.Close asChild>
            <button className={styles.close} type="button">
              <X />
            </button>
          </Radix.Close>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default Dialog;
