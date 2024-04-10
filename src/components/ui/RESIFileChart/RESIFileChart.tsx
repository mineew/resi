import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { type RESIFile } from '@/store/RESIFile';
import { type SmoothDataOptions } from '@/utils/stats/smoothData';
import { smoothFiles } from '@/utils/stats/smoothFiles';

import convertFilesToChartData from './convertFilesToChartData';

interface RESIFileChartProps {
  files: RESIFile[];
  smoothDataOptions?: SmoothDataOptions;
}

function RESIFileChart(props: RESIFileChartProps) {
  const { files, smoothDataOptions = { chunkSize: 250 } } = props;

  const smoothed = smoothFiles(files, smoothDataOptions);
  const data = convertFilesToChartData(smoothed);

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 60, right: 60, left: 10, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <YAxis />

        <XAxis
          dataKey="x"
          type="number"
          domain={['auto', 'auto']}
          tickCount={10}
        />

        {files.map((file, i) => (
          <Line
            key={`${file.name}-${i}`}
            dataKey={file.name}
            stroke={file.color}
            strokeWidth={file.strokeWidth}
            type="monotone"
            unit="RESI"
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RESIFileChart;
