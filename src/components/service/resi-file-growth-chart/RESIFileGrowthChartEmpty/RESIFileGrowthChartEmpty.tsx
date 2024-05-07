import { ScatterChart } from 'lucide-react';
import { memo } from 'react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileGrowthChartEmpty = memo(() => {
  return (
    <EmptyState icon={<ScatterChart />}>
      <p>
        Минимум 2 резистограммы необходимы для построения графика зависимости
      </p>
    </EmptyState>
  );
});

RESIFileGrowthChartEmpty.displayName = 'RESIFileGrowthChartEmpty';

export default RESIFileGrowthChartEmpty;
