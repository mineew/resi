import { ReferenceLine } from 'recharts';

import styles from './RESIFileChart.module.css';

/**
 * Chart components do not render when wrapped in custom components
 * https://github.com/recharts/recharts/issues/2788
 */

interface RenderScaleReferenceOptions {
  scale?: number;
  maxX: number;
}

function renderScaleReference(options: RenderScaleReferenceOptions) {
  const { scale, maxX } = options;

  if (!scale || scale <= 1) {
    return null;
  }

  const references: number[] = [];
  const scaleChartUnits = scale / 1000;

  for (
    let i = scaleChartUnits;
    i < maxX + scaleChartUnits * 10;
    i += scaleChartUnits
  ) {
    references.push(i);
  }

  return (
    <>
      {references.map((x) => (
        <ReferenceLine
          key={`scale-${x}-reference`}
          className={styles['scale-line']}
          x={x}
        />
      ))}
    </>
  );
}

export default renderScaleReference;
