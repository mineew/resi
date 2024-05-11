import { ReferenceLine } from 'recharts';

import styles from './LineChart.module.css';

/**
 * Chart components do not render when wrapped in custom components
 * https://github.com/recharts/recharts/issues/2788
 */

interface RenderStepReferencesOptions {
  step?: number;
  maxX: number;
}

function renderStepReferences(options: RenderStepReferencesOptions) {
  const { step, maxX } = options;

  if (!step) {
    return null;
  }

  const references: number[] = [];

  for (let i = step; i < maxX + step; i += step) {
    references.push(i);
  }

  return (
    <>
      {references.map((x) => (
        <ReferenceLine
          key={`step-${x}-reference`}
          className={styles['step-line']}
          x={x}
        />
      ))}
    </>
  );
}

export default renderStepReferences;
