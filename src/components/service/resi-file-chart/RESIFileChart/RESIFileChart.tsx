import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import LineChart from '@/components/charts/LineChart/LineChart';
import { type RESIFile } from '@/store/types/RESIFile';
import getChartExportFilename from '@/utils/chart-export/getChartExportFilename';

interface RESIFileChartProps {
  files: RESIFile[];
  chunkSize?: number;
  shouldRenderChunkSize?: boolean;
  offsetGap?: number;
  offsetLeft?: number;
  onChangeOffsetLeft?: (offset: number) => void;
  offsetRight?: number;
  onChangeOffsetRight?: (offset: number) => void;
  interactive?: boolean;
  width?: number;
  height?: number;
}

const RESIFileChart = memo((props: RESIFileChartProps) => {
  const {
    files,
    chunkSize = 1,
    shouldRenderChunkSize,
    offsetGap = 1,
    offsetLeft = 0,
    onChangeOffsetLeft,
    offsetRight = 0,
    onChangeOffsetRight,
    interactive,
    width,
    height,
  } = props;

  const { t } = useTranslation();

  const convertX = useCallback(
    (x: number) => {
      return (x * chunkSize) / 1000;
    },
    [chunkSize],
  );

  const handleChangeOffsetLeft = useCallback(
    (offset: number) => {
      onChangeOffsetLeft?.(offset * 10);
    },
    [onChangeOffsetLeft],
  );

  const handleChangeOffsetRight = useCallback(
    (offset: number) => {
      onChangeOffsetRight?.(offset * 10);
    },
    [onChangeOffsetRight],
  );

  const formatTooltip = useCallback(
    (tooltipContent: number) => {
      return t('COMMON.MM', { value: tooltipContent * 10 });
    },
    [t],
  );

  const title = t('RESI_FILE_CHART.TITLE');
  const exportFilename = getChartExportFilename(title);

  return (
    <LineChart
      title={title}
      data={files}
      xLabel={t('RESI_FILE_CHART.X_LABEL') + ', ' + t('COMMON.CM')}
      xConverter={convertX}
      xTickCount={20}
      yLabel={t('RESI_FILE_CHART.Y_LABEL') + ', RESI'}
      yTickCount={20}
      offsetGap={offsetGap / 10}
      offsetLeft={offsetLeft / 10}
      onChangeOffsetLeft={handleChangeOffsetLeft}
      offsetRight={offsetRight / 10}
      onChangeOffsetRight={handleChangeOffsetRight}
      tooltipFormatter={formatTooltip}
      step={
        shouldRenderChunkSize && chunkSize > 1 ? chunkSize / 1000 : undefined
      }
      interactive={interactive}
      exportFilename={exportFilename}
      width={width}
      height={height}
    />
  );
});

RESIFileChart.displayName = 'RESIFileChart';

export default RESIFileChart;
