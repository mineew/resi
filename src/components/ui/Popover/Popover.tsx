import * as Radix from '@radix-ui/react-popover';
import classNames from 'classnames';
import type { JSX, ReactNode } from 'react';

import styles from './Popover.module.css';

interface PopoverProps {
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Popover(props: PopoverProps) {
  const { open, trigger, children, onOpenChange } = props;

  return (
    <Radix.Root open={open} onOpenChange={onOpenChange}>
      <Radix.Trigger asChild>{trigger}</Radix.Trigger>

      <Radix.Portal>
        <Radix.Content
          className={classNames(styles.content, 'shadow')}
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
