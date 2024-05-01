import { memo } from 'react';
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from 'recharts';

import Formula from '@/components/ui/Formula/Formula';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import styles from './RESIFileDiffChart.module.css';
import convertDiffsToChartData from './convertDiffsToChartData';
import convertDiffsToLinearRegression from './convertDiffsToLinearRegression';

interface RESIFileDiffChartProps {
  diffs: RESIFileDiff[];
}

const RESIFileDiffChart = memo((props: RESIFileDiffChartProps) => {
  const { diffs } = props;
  const { data, minY } = convertDiffsToChartData(diffs);
  const { regression, regressionLine } = convertDiffsToLinearRegression(diffs);

  return (
    <div className={styles['chart-wrapper']}>
      <div className={styles['chart-title']}>
        <h2>Износ сверла</h2>
        <Formula a={regression.equation[0]} b={regression.equation[1]} />
      </div>

      <div className={styles['chart']}>
        <ResponsiveContainer>
          <ComposedChart margin={{ top: 10, right: 40, left: 20, bottom: 0 }}>
            <CartesianGrid className={styles.grid} />

            <XAxis
              className={styles.axis}
              dataKey="x"
              type="number"
              label={{ value: 'см', position: 'center' }}
              tickFormatter={(value) => (value ? value + '' : '')}
              height={70}
            />

            {minY < 0 && (
              <ReferenceLine className={styles['zero-reference']} y={0} />
            )}

            <YAxis
              className={styles.axis}
              dataKey="y"
              type="number"
              label={{ value: 'RESI', position: 'insideLeft', angle: -90 }}
            />

            <Scatter
              className={styles.scatter}
              data={data}
              isAnimationActive={false}
            />

            <Line
              className={styles['data-line']}
              data={regressionLine}
              dataKey="y"
              dot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

RESIFileDiffChart.displayName = 'RESIFileDiffChart';

export default RESIFileDiffChart;
