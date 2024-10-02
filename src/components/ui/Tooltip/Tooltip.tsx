import * as Radix from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import { type JSX } from 'react';

import styles from './Tooltip.module.css';

interface TooltipProps {
  className?: string;
  triggerClassName?: string;
  title: string;
  children: JSX.Element;
}

function Tooltip(props: TooltipProps) {
  const { className, triggerClassName, title, children } = props;

  return (
    <Radix.Provider
      delayDuration={0}
      skipDelayDuration={0}
      disableHoverableContent
    >
      <Radix.Root>
        <Radix.Trigger
          className={classNames(styles.trigger, triggerClassName)}
          asChild
        >
          <div>{children}</div>
        </Radix.Trigger>

        <Radix.Portal>
          <Radix.Content
            className={classNames(className, styles.content, 'shadow')}
            side="bottom"
            sideOffset={6}
            align="center"
          >
            {title}
          </Radix.Content>
        </Radix.Portal>
      </Radix.Root>
    </Radix.Provider>
  );
}

export default Tooltip;
