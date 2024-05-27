import { ScatterChart } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileGrowthChartEmpty = memo(() => {
  const { t } = useTranslation();

  return (
    <EmptyState icon={<ScatterChart />}>
      <p>{t('COMMON.CHARTS.SCATTER_CHART_NO_DATA', { count: 1 })}</p>
    </EmptyState>
  );
});

RESIFileGrowthChartEmpty.displayName = 'RESIFileGrowthChartEmpty';

export default RESIFileGrowthChartEmpty;
