import { LineChart } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState/EmptyState';

import styles from './RESIFileChartEmpty.module.css';

interface RESIFileChartEmptyProps {
  children?: ReactNode;
}

const RESIFileChartEmpty = memo((props: RESIFileChartEmptyProps) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <EmptyState icon={<LineChart />}>
      <p>{t('RESI_FILE_CHART.NO_DATA')}</p>

      {children && (
        <div className={styles['additional-content']}>{children}</div>
      )}
    </EmptyState>
  );
});

RESIFileChartEmpty.displayName = 'RESIFileChartEmpty';

export default RESIFileChartEmpty;
