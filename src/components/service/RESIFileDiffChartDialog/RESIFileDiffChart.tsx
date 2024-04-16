import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from 'recharts';

import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import styles from './RESIFileDiffChartDialog.module.css';
import convertDiffsToChartData from './convertDiffsToChartData';
import convertDiffsToLinearRegression from './convertDiffsToLinearRegression';

interface RESIFileDiffChartProps {
  diffs: RESIFileDiff[];
}

function RESIFileDiffChart(props: RESIFileDiffChartProps) {
  const { diffs } = props;
  const data = convertDiffsToChartData(diffs);
  const { regression, regressionLine } = convertDiffsToLinearRegression(diffs);

  return (
    <div className={styles['chart-wrapper']}>
      <div className={styles['chart-title']}>{regression.string}</div>

      <div className={styles['chart']}>
        <ResponsiveContainer>
          <ComposedChart>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="x"
              type="number"
              label={{ value: 'см', position: 'center' }}
              height={70}
            />

            <YAxis
              dataKey="y"
              type="number"
              label={{ value: 'RESI', position: 'insideLeft', angle: -90 }}
            />

            <Scatter data={data} isAnimationActive={false} />

            <Line
              data={regressionLine}
              dataKey="y"
              stroke="#000000"
              dot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RESIFileDiffChart;
