import * as Radix from '@radix-ui/react-scroll-area';
import classNames from 'classnames';
import type { HTMLAttributes } from 'react';

import styles from './ScrollArea.module.css';

interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {}

function ScrollArea(props: ScrollAreaProps) {
  const { children, className, ...otherProps } = props;

  return (
    <Radix.Root type="always" asChild>
      <div className={classNames(className, styles.root)} {...otherProps}>
        <Radix.Viewport className={styles.viewport}>{children}</Radix.Viewport>

        <Radix.Scrollbar className={styles.scrollbar} orientation="horizontal">
          <Radix.Thumb className={styles.thumb} />
        </Radix.Scrollbar>

        <Radix.Scrollbar className={styles.scrollbar} orientation="vertical">
          <Radix.Thumb className={styles.thumb} />
        </Radix.Scrollbar>
      </div>
    </Radix.Root>
  );
}

export default ScrollArea;
