import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import useStore from '@/store/store';
import { smoothFiles } from '@/utils/stats/smoothFiles';

import convertFilesToChartData from './convertFilesToChartData';

function FileChart() {
  const files = useStore((store) => store.files.filter((f) => f.checked));
  const smoothed = smoothFiles(files, { chunkSize: 250 });
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
            unit="RESI"
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default FileChart;
