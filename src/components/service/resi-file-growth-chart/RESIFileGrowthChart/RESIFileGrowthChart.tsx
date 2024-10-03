import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import type { RESIFileGrowth } from '@/store/types/RESIFileGrowth';
import getChartExportFilename from '@/utils/chart-export/getChartExportFilename';

import convertGrowthToChartPoints from './convertGrowthToChartPoints';

interface RESIFileGrowthChartProps {
  growth: RESIFileGrowth[];
}

const RESIFileGrowthChart = memo((props: RESIFileGrowthChartProps) => {
  const { growth } = props;
  const { t } = useTranslation();
  const points = convertGrowthToChartPoints(growth);

  const title = t('RESI_FILE_GROWTH_CHART.TITLE');
  const exportFilename = getChartExportFilename(title);

  return (
    <ScatterChart
      title={title}
      points={points}
      xLabel={t('RESI_FILE_GROWTH_CHART.X_LABEL') + ', ' + t('COMMON.CM')}
      yLabel={t('RESI_FILE_GROWTH_CHART.Y_LABEL') + ', RESI'}
      exportFilename={exportFilename}
    />
  );
});

RESIFileGrowthChart.displayName = 'RESIFileGrowthChart';

export default RESIFileGrowthChart;
