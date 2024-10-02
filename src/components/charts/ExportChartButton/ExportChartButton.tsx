import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Dropdown, { type DropdownItem } from '@/components/ui/Dropdown/Dropdown';
import exportChartToPng from '@/utils/chart-export/exportChartToPng';

import styles from './ExportChartButton.module.css';

interface ExportChartButtonProps {
  className?: string;
  chartWrapper: HTMLDivElement | null;
  filename: string;
}

function ExportChartButton(props: ExportChartButtonProps) {
  const { className, chartWrapper, filename } = props;
  const { t } = useTranslation();

  const handleExportChart = (scale: number) => {
    if (chartWrapper) {
      void exportChartToPng(chartWrapper, filename, scale);
    }
  };

  const items: DropdownItem[] = [
    {
      id: '1x',
      label: '1✕',
      onClick: () => {
        handleExportChart(1);
      },
    },
    {
      id: '2x',
      label: '2✕',
      onClick: () => {
        handleExportChart(2);
      },
    },
    {
      id: '3x',
      label: '3✕',
      onClick: () => {
        handleExportChart(3);
      },
    },
  ];

  return (
    <Dropdown
      items={items}
      defaultTriggerClassName={classNames(styles.button, className)}
      defaultTriggerTitle={t('CHARTS.EXPORT_CHART_BUTTON')}
      fullWidthContent={false}
    />
  );
}

export default ExportChartButton;
