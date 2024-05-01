import { LineChart } from 'lucide-react';
import { memo } from 'react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileChartEmpty = memo(() => {
  return (
    <EmptyState icon={<LineChart />}>
      <p>Нет данных для построения графика</p>
    </EmptyState>
  );
});

RESIFileChartEmpty.displayName = 'RESIFileChartEmpty';

export default RESIFileChartEmpty;
