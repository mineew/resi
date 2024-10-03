import { LineChart } from 'lucide-react';
import { memo, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

interface RESIFileChartEmptyProps {
  children?: ReactNode;
}

const RESIFileChartEmpty = memo((props: RESIFileChartEmptyProps) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <EmptyState icon={<LineChart />}>
      <p>{t('RESI_FILE_CHART.NO_DATA')}</p>
      {children}
    </EmptyState>
  );
});

RESIFileChartEmpty.displayName = 'RESIFileChartEmpty';

export default RESIFileChartEmpty;
