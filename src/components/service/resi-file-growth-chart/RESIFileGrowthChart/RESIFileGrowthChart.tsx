import { memo } from 'react';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

import convertGrowthToChartPoints from './convertGrowthToChartPoints';

interface RESIFileGrowthChartProps {
  growth: RESIFileGrowth[];
}

const RESIFileGrowthChart = memo((props: RESIFileGrowthChartProps) => {
  const { growth } = props;
  const points = convertGrowthToChartPoints(growth);

  return (
    <ScatterChart
      title="Давление стенок"
      points={points}
      xLabel="см"
      yLabel="RESI"
    />
  );
});

RESIFileGrowthChart.displayName = 'RESIFileGrowthChart';

export default RESIFileGrowthChart;
