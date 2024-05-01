import { ScatterChart } from 'lucide-react';
import { memo } from 'react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

const RESIFileDiffChartEmpty = memo(() => {
  return (
    <EmptyState icon={<ScatterChart />}>
      <p>
        Минимум 3 резистограммы необходимы для построения графика зависимости
      </p>
    </EmptyState>
  );
});

RESIFileDiffChartEmpty.displayName = 'RESIFileDiffChartEmpty';

export default RESIFileDiffChartEmpty;
