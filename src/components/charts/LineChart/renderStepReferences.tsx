import classNames from 'classnames';
import { ReferenceLine } from 'recharts';

import styles from './LineChart.module.css';

/**
 * Chart components do not render when wrapped in custom components
 * https://github.com/recharts/recharts/issues/2788
 */

interface RenderStepReferencesOptions {
  maxX: number;
  step?: number;
}

function renderStepReferences(options: RenderStepReferencesOptions) {
  const { step, maxX } = options;

  if (!step) {
    return null;
  }

  const references: number[] = [];

  for (let i = step; i < maxX + step * 100; i += step) {
    references.push(i);
  }

  return (
    <>
      {references.map((x) => (
        <ReferenceLine
          x={x}
          key={`step-${x}-reference`}
          className={classNames(styles['step-line'], 'step-line')}
        />
      ))}
    </>
  );
}

export default renderStepReferences;
