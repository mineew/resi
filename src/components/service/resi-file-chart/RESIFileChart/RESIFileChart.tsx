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
        margin={{ top: 20, right: 40, left: 20, bottom: 0 }}
      >
        <CartesianGrid stroke="var(--slate-6)" strokeDasharray="3 3" />

        <YAxis
          tickCount={20}
          label={{
            value: 'RESI',
            position: 'insideLeft',
            angle: -90,
            fill: 'var(--slate-12)',
          }}
          stroke="var(--slate-12)"
        />

        <XAxis
          dataKey="x"
          type="number"
          tickCount={20}
          domain={[0, (dataMax: number) => Math.round(dataMax + 1)]}
          label={{
            value: 'см',
            position: 'center',
            fill: 'var(--slate-12)',
          }}
          height={70}
          stroke="var(--slate-12)"
        />

        {files.map((file, i) => (
          <Line
            key={`${file.name}-${i}`}
            dataKey={file.name}
            stroke={file.color || 'var(--slate-12)'}
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
