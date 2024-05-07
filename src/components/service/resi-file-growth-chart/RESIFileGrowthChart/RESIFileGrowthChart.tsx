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
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

import styles from './RESIFileGrowthChart.module.css';
import convertGrowthToChartData from './convertGrowthToChartData';
import convertGrowthToLinearRegression from './convertGrowthToLinearRegression';

interface RESIFileGrowthChartProps {
  growth: RESIFileGrowth[];
}

const RESIFileGrowthChart = memo((props: RESIFileGrowthChartProps) => {
  const { growth } = props;
  const { data } = convertGrowthToChartData(growth);
  const { regression, regressionLine } =
    convertGrowthToLinearRegression(growth);

  return (
    <div className={styles['chart-wrapper']}>
      <div className={styles['chart-title']}>
        <h2>Давление стенок</h2>
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

            <YAxis
              className={styles.axis}
              dataKey="y"
              type="number"
              label={{ value: 'RESI', position: 'insideLeft', angle: -90 }}
            />

            <ReferenceLine className={styles['zero-reference']} y={0} />

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

RESIFileGrowthChart.displayName = 'RESIFileGrowthChart';

export default RESIFileGrowthChart;
