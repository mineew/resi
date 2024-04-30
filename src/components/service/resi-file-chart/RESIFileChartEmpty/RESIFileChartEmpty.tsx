import { LineChart } from 'lucide-react';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

function RESIFileChartEmpty() {
  return (
    <EmptyState icon={<LineChart />}>
      <p>Нет данных для построения графика</p>
    </EmptyState>
  );
}

export default RESIFileChartEmpty;
