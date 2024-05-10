import { memo } from 'react';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import convertDiffsToChartPoints from './convertDiffsToChartPoints';

interface RESIFileDiffChartProps {
  diffs: RESIFileDiff[];
}

const RESIFileDiffChart = memo((props: RESIFileDiffChartProps) => {
  const { diffs } = props;
  const points = convertDiffsToChartPoints(diffs);

  return (
    <ScatterChart
      title="Износ сверла"
      points={points}
      xLabel="см"
      yLabel="RESI"
    />
  );
});

RESIFileDiffChart.displayName = 'RESIFileDiffChart';

export default RESIFileDiffChart;
