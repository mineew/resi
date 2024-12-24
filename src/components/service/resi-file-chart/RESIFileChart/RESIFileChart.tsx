import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import LineChart from '@/components/charts/LineChart/LineChart';
import type { RESIFile } from '@/store/types/RESIFile';
import getChartExportFilename from '@/utils/chart-export/getChartExportFilename';

interface RESIFileChartProps {
  files: RESIFile[];
  width?: number;
  height?: number;
  chunkSize?: number;
  offsetGap?: number;
  offsetLeft?: number;
  offsetRight?: number;
  interactive?: boolean;
  shouldRenderChunkSize?: boolean;
  onChangeOffsetLeft?: (offset: number) => void;
  onChangeOffsetRight?: (offset: number) => void;
}

const RESIFileChart = memo((props: RESIFileChartProps) => {
  const {
    files,
    width,
    height,
    interactive,
    chunkSize = 1,
    offsetGap = 1,
    offsetLeft = 0,
    offsetRight = 0,
    onChangeOffsetLeft,
    onChangeOffsetRight,
    shouldRenderChunkSize,
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
      data={files}
      title={title}
      width={width}
      xTickCount={20}
      yTickCount={20}
      height={height}
      xConverter={convertX}
      interactive={interactive}
      offsetGap={offsetGap / 10}
      offsetLeft={offsetLeft / 10}
      offsetRight={offsetRight / 10}
      exportFilename={exportFilename}
      tooltipFormatter={formatTooltip}
      onChangeOffsetLeft={handleChangeOffsetLeft}
      onChangeOffsetRight={handleChangeOffsetRight}
      yLabel={t('RESI_FILE_CHART.Y_LABEL') + ', RESI'}
      xLabel={t('RESI_FILE_CHART.X_LABEL') + ', ' + t('COMMON.CM')}
      step={
        shouldRenderChunkSize && chunkSize > 1 ? chunkSize / 1000 : undefined
      }
    />
  );
});

RESIFileChart.displayName = 'RESIFileChart';

export default RESIFileChart;
