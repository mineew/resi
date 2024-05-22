import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ScatterChart from '@/components/charts/ScatterChart/ScatterChart';
import { type RESIFileDiff } from '@/store/types/RESIFileDiff';

import convertDiffsToChartPoints from './convertDiffsToChartPoints';

interface RESIFileDiffChartProps {
  diffs: RESIFileDiff[];
}

const RESIFileDiffChart = memo((props: RESIFileDiffChartProps) => {
  const { diffs } = props;
  const { t } = useTranslation();
  const points = convertDiffsToChartPoints(diffs);

  return (
    <ScatterChart
      title={t('RESI_FILE_DIFF_CHART.TITLE')}
      points={points}
      xLabel={t('COMMON.CM')}
      yLabel="RESI"
    />
  );
});

RESIFileDiffChart.displayName = 'RESIFileDiffChart';

export default RESIFileDiffChart;
