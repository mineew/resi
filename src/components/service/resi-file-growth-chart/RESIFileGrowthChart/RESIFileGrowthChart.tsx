import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import { type RESIFileGrowth } from '@/store/types/RESIFileGrowth';

import convertGrowthToChartPoints from './convertGrowthToChartPoints';

interface RESIFileGrowthChartProps {
  growth: RESIFileGrowth[];
}

const RESIFileGrowthChart = memo((props: RESIFileGrowthChartProps) => {
  const { growth } = props;
  const { t } = useTranslation();
  const points = convertGrowthToChartPoints(growth);

  return (
    <ScatterChart
      title={t('RESI_FILE_GROWTH_CHART.TITLE')}
      points={points}
      xLabel={t('RESI_FILE_GROWTH_CHART.X_LABEL') + ', ' + t('COMMON.CM')}
      yLabel={t('RESI_FILE_GROWTH_CHART.Y_LABEL') + ', RESI'}
    />
  );
});

RESIFileGrowthChart.displayName = 'RESIFileGrowthChart';

export default RESIFileGrowthChart;
