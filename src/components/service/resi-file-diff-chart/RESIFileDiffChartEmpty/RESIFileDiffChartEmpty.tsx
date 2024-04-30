import { ScatterChart } from 'lucide-react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

function RESIFileDiffChartEmpty() {
  return (
    <EmptyState icon={<ScatterChart />}>
      <p>
        Минимум 3 резистограммы необходимы для построения графика зависимости
      </p>
    </EmptyState>
  );
}

export default RESIFileDiffChartEmpty;
