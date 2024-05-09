import * as Radix from '@radix-ui/react-tooltip';
import classNames from 'classnames';

import styles from './Tooltip.module.css';

interface TooltipProps {
  title: string;
  children: JSX.Element;
}

function Tooltip(props: TooltipProps) {
  const { title, children } = props;

  return (
    <Radix.Provider
      delayDuration={0}
      skipDelayDuration={0}
      disableHoverableContent
    >
      <Radix.Root>
        <Radix.Trigger className={styles.trigger} tabIndex={-1}>
          {children}
        </Radix.Trigger>

        <Radix.Portal>
          <Radix.Content
            className={classNames(styles.content, 'shadow')}
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