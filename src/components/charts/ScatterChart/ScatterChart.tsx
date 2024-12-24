import { useState } from 'react';
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

import ExportChartButton from '@/components/charts/ExportChartButton/ExportChartButton';
import { xTickFormatter, yTickFormatter } from '@/components/charts/utils';
import Formula from '@/components/ui/Formula/Formula';

import convertPointsToLinearRegression from './convertPointsToLinearRegression';
import type { ScatterChartPoint } from './ScatterChartPoint';

import styles from './ScatterChart.module.css';

interface ScatterChartProps {
  title: string;
  points: ScatterChartPoint[];
  width?: number;
  xLabel?: string;
  yLabel?: string;
  height?: number;
  exportFilename?: string;
}

function ScatterChart(props: ScatterChartProps) {
  const {
    title,
    width,
    points,
    xLabel,
    yLabel,
    height,
    exportFilename = 'scatter-chart.png',
  } = props;
  const { t } = useTranslation();
  const { regression, regressionLine } =
    convertPointsToLinearRegression(points);
  const [chartWrapper, setChartWrapper] = useState<null | HTMLDivElement>(null);

  const xLabelObject = !xLabel
    ? undefined
    : {
        value: xLabel,
        position: 'center',
      };

  const yLabelObject = !yLabel
    ? undefined
    : {
        angle: -90,
        value: yLabel,
        position: 'middle',
      };

  return (
    <div className={styles['chart-wrapper']}>
      <div className={styles['chart-title']}>
        <h2>{title}</h2>
        <Formula a={regression.equation[0]} b={regression.equation[1]} />
      </div>

      <div
        ref={setChartWrapper}
        className={styles.chart}
        data-testid="scatter-chart-container"
      >
        <ExportChartButton
          filename={exportFilename}
          chartWrapper={chartWrapper}
          className={styles['export-button']}
        />

        <ResponsiveContainer width={width} height={height}>
          <ComposedChart
            margin={{ top: 10, right: 40, left: -25, bottom: -10 }}
          >
            <CartesianGrid className={styles.grid} />

            <XAxis
              dataKey="x"
              height={80}
              type="number"
              label={xLabelObject}
              className={styles.axis}
              tickFormatter={xTickFormatter(t)}
            />

            <YAxis
              dataKey="y"
              width={120}
              type="number"
              label={yLabelObject}
              className={styles.axis}
              tickFormatter={yTickFormatter(t)}
            />

            <ReferenceLine y={0} className={styles['zero-reference']} />

            <Scatter
              data={points}
              isAnimationActive={false}
              className={styles.scatter}
            />

            <Line
              dataKey="y"
              dot={false}
              data={regressionLine}
              isAnimationActive={false}
              className={styles['data-line']}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ScatterChart;
