import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import type { RESIFileDiff } from '@/store/types/RESIFileDiff';
import getChartExportFilename from '@/utils/chart-export/getChartExportFilename';

import convertDiffsToChartPoints from './convertDiffsToChartPoints';

interface RESIFileDiffChartProps {
  diffs: RESIFileDiff[];
}

const RESIFileDiffChart = memo((props: RESIFileDiffChartProps) => {
  const { diffs } = props;
  const { t } = useTranslation();
  const points = convertDiffsToChartPoints(diffs);

  const title = t('RESI_FILE_DIFF_CHART.TITLE');
  const exportFilename = getChartExportFilename(title);

  return (
    <ScatterChart
      title={title}
      points={points}
      exportFilename={exportFilename}
      yLabel={t('RESI_FILE_DIFF_CHART.Y_LABEL') + ', RESI'}
      xLabel={t('RESI_FILE_DIFF_CHART.X_LABEL') + ', ' + t('COMMON.CM')}
    />
  );
});

RESIFileDiffChart.displayName = 'RESIFileDiffChart';

export default RESIFileDiffChart;
