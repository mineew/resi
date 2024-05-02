import * as Radix from '@radix-ui/react-popover';
import classNames from 'classnames';
import { type ReactNode } from 'react';

import styles from './Popover.module.css';

interface PopoverProps {
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

function Popover(props: PopoverProps) {
  const { trigger, open, onOpenChange, children } = props;

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
