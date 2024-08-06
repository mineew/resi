import { ScatterChart } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileDiffChartEmpty = memo(() => {
  const { t } = useTranslation();

  return (
    <EmptyState icon={<ScatterChart />}>
      <p>{t('CHARTS.SCATTER_CHART_NO_DATA', { count: 3 })}</p>
    </EmptyState>
  );
});

RESIFileDiffChartEmpty.displayName = 'RESIFileDiffChartEmpty';

export default RESIFileDiffChartEmpty;
