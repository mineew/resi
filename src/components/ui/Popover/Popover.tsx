import * as Radix from '@radix-ui/react-popover';
import { type ReactNode } from 'react';

import styles from './Popover.module.css';

interface PopoverProps {
  trigger: JSX.Element;
  children: ReactNode;
}

function Popover(props: PopoverProps) {
  const { trigger, children } = props;

  return (
    <Radix.Root>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>

      <Radix.Portal forceMount>
        <Radix.Content
          className={styles.content}
          side="bottom"
          sideOffset={6}
          align="start"
        >
          {children}
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}

export default Popover;