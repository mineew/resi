import classNames from 'classnames';
import type { MouseEventHandler } from 'react';
import { ReferenceArea, ReferenceLine } from 'recharts';

import styles from './LineChart.module.css';

/**
 * Chart components do not render when wrapped in custom components
 * https://github.com/recharts/recharts/issues/2788
 */

interface RenderReferenceOptions {
  side: 'left' | 'right';
  chartDomain: readonly [number, number, number, number];
  offset?: number;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

function renderReference(options: RenderReferenceOptions) {
  const { side, offset, chartDomain, onMouseEnter, onMouseLeave } = options;
  if (!offset) return null;

  const [minX, minY, maxX, maxY] = chartDomain;
  const referenceOverflow = 100;

  return (
    <>
      <ReferenceArea
        y1={minY}
        ifOverflow="hidden"
        y2={maxY + referenceOverflow}
        className={styles['reference-area']}
        x1={side === 'left' ? minX : offset}
        x2={side === 'left' ? offset : maxX + referenceOverflow}
        isFront
      />

      <ReferenceLine
        x={offset}
        className={classNames(styles['resize-line'], styles[side])}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

      <ReferenceLine
        x={offset}
        className={classNames(styles['reference-line'], styles[side])}
      />
    </>
  );
}

export default renderReference;
