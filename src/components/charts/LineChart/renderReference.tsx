import classNames from 'classnames';
import { type MouseEventHandler } from 'react';
import { ReferenceArea, ReferenceLine } from 'recharts';

import styles from './LineChart.module.css';

/**
 * Chart components do not render when wrapped in custom components
 * https://github.com/recharts/recharts/issues/2788
 */

interface RenderReferenceOptions {
  offset?: number;
  side: 'left' | 'right';
  chartDomain: readonly [number, number, number, number];
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

function renderReference(options: RenderReferenceOptions) {
  const { offset, side, chartDomain, onMouseEnter, onMouseLeave } = options;
  if (!offset) return null;

  const [minX, minY, maxX, maxY] = chartDomain;
  const referenceOverflow = 100;

  return (
    <>
      <ReferenceArea
        className={styles['reference-area']}
        x1={side === 'left' ? minX : offset}
        x2={side === 'left' ? offset : maxX + referenceOverflow}
        y1={minY}
        y2={maxY + referenceOverflow}
        ifOverflow="hidden"
        isFront
      />

      <ReferenceLine
        className={classNames(styles['resize-line'], styles[side])}
        x={offset}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

      <ReferenceLine
        className={classNames(styles['reference-line'], styles[side])}
        x={offset}
      />
    </>
  );
}

export default renderReference;
