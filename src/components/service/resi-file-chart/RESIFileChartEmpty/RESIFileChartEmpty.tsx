import { LineChart } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileChartEmpty = memo(() => {
  const { t } = useTranslation();

  return (
    <EmptyState icon={<LineChart />}>
      <p>{t('RESI_FILE_CHART.NO_DATA')}</p>
    </EmptyState>
  );
});

RESIFileChartEmpty.displayName = 'RESIFileChartEmpty';

export default RESIFileChartEmpty;
