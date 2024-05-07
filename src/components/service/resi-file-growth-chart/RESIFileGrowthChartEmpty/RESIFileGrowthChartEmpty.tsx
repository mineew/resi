import { ScatterChart } from 'lucide-react';
import { memo } from 'react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileGrowthChartEmpty = memo(() => {
  return (
    <EmptyState icon={<ScatterChart />}>
      <p>
        Минимум 1 резистограмма необходима для построения графика зависимости
      </p>
    </EmptyState>
  );
});

RESIFileGrowthChartEmpty.displayName = 'RESIFileGrowthChartEmpty';

export default RESIFileGrowthChartEmpty;
