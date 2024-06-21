import { useTranslation } from 'react-i18next';
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

import { xTickFormatter, yTickFormatter } from '@/components/charts/utils';
import Formula from '@/components/ui/Formula/Formula';

import styles from './ScatterChart.module.css';
import { type ScatterChartPoint } from './ScatterChartPoint';
import convertPointsToLinearRegression from './convertPointsToLinearRegression';

interface ScatterChartProps {
  title: string;
  points: ScatterChartPoint[];
  xLabel?: string;
  yLabel?: string;
}

function ScatterChart(props: ScatterChartProps) {
  const { title, points, xLabel, yLabel } = props;
  const { t } = useTranslation();
  const { regression, regressionLine } =
    convertPointsToLinearRegression(points);

  const xLabelObject = !xLabel
    ? undefined
    : {
        value: xLabel,
        position: 'center',
      };

  const yLabelObject = !yLabel
    ? undefined
    : {
        value: yLabel,
        position: 'middle',
        angle: -90,
      };

  return (
    <div className={styles['chart-wrapper']}>
      <div className={styles['chart-title']}>
        <h2>{title}</h2>
        <Formula a={regression.equation[0]} b={regression.equation[1]} />
      </div>

      <div className={styles['chart']}>
        <ResponsiveContainer>
          <ComposedChart
            margin={{ top: 10, right: 40, left: -25, bottom: -10 }}
          >
            <CartesianGrid className={styles.grid} />

            <XAxis
              className={styles.axis}
              dataKey="x"
              type="number"
              label={xLabelObject}
              tickFormatter={xTickFormatter(t)}
              height={80}
            />

            <YAxis
              className={styles.axis}
              dataKey="y"
              type="number"
              label={yLabelObject}
              tickFormatter={yTickFormatter(t)}
              width={120}
            />

            <ReferenceLine className={styles['zero-reference']} y={0} />

            <Scatter
              className={styles.scatter}
              data={points}
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
}

export default ScatterChart;
