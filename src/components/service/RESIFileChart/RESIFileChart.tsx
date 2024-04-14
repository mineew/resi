import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { type RESIFile } from '@/store/types/RESIFile';

import convertFilesToChartData from './convertFilesToChartData';

interface RESIFileChartProps {
  files: RESIFile[];
  scale?: number;
}

function RESIFileChart(props: RESIFileChartProps) {
  const { files, scale } = props;
  const data = convertFilesToChartData(files, scale);

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 60, right: 50, left: 20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <YAxis
          tickCount={20}
          label={{
            value: '[RESI]',
            position: 'insideLeft',
            angle: -90,
          }}
        />

        <XAxis
          dataKey="x"
          type="number"
          domain={['auto', 'auto']}
          tickCount={20}
          label={{
            value: '[mm]',
            position: 'center',
          }}
          height={70}
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
