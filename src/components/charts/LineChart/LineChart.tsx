import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import ExportChartButton from '@/components/charts/ExportChartButton/ExportChartButton';
import { xTickFormatter, yTickFormatter } from '@/components/charts/utils';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import convertChartData from './convertChartData';
import type { LineChartDataset } from './LineChartDataset';
import renderReference from './renderReference';
import renderStepReferences from './renderStepReferences';
import useReferenceDragging from './useReferenceDragging';

import styles from './LineChart.module.css';

interface LineChartProps {
  title: string;
  data: LineChartDataset[];
  step?: number;
  width?: number;
  xLabel?: string;
  yLabel?: string;
  height?: number;
  offsetGap?: number;
  xTickCount?: number;
  yTickCount?: number;
  offsetLeft?: number;
  offsetRight?: number;
  interactive?: boolean;
  exportFilename?: string;
  xConverter?: (x: number) => number;
  onChangeOffsetLeft?: (offset: number) => void;
  onChangeOffsetRight?: (offset: number) => void;
  tooltipFormatter?: (tooltipContent: number) => string;
}

function LineChart(props: LineChartProps) {
  const {
    data,
    step,
    title,
    width,
    xLabel,
    yLabel,
    height,
    offsetGap,
    xConverter,
    xTickCount,
    yTickCount,
    interactive,
    tooltipFormatter,
    onChangeOffsetLeft,
    onChangeOffsetRight,
    offsetLeft: defaultOffsetLeft = 0,
    exportFilename = 'line-chart.png',
    offsetRight: defaultOffsetRight = 0,
  } = props;

  const { t } = useTranslation();

  const [chartWrapper, setChartWrapper] = useState<null | HTMLDivElement>(null);

  const [offsetLeft, setOffsetLeft] = useDebouncedState(
    defaultOffsetLeft,
    onChangeOffsetLeft,
    500,
  );

  const [offsetRight, setOffsetRight] = useDebouncedState(
    defaultOffsetRight,
    onChangeOffsetRight,
    500,
  );

  const {
    offsetDrag,
    tooltipContent,
    tooltipIsActive,
    tooltipIsVisible,
    handleLeaveOffset,
    handleChartMouseUp,
    handleChartMouseDown,
    handleChartMouseMove,
    handleEnterOffsetLeft,
    handleEnterOffsetRight,
  } = useReferenceDragging({
    offsetLeft,
    interactive,
    offsetRight,
    gap: offsetGap,
    onChangeOffsetLeft: setOffsetLeft,
    onChangeOffsetRight: setOffsetRight,
  });

  const { maxX, maxY, lines } = convertChartData(data, xConverter);
  const chartDomain = [0, 0, maxX, maxY] as const;

  const xLabelObject = !xLabel
    ? undefined
    : {
        value: xLabel,
        position: 'center',
      };

  const yLabelObject = !yLabel
    ? undefined
    : {
        angle: -90,
        offset: 40,
        value: yLabel,
        position: 'middle',
      };

  return (
    <div
      ref={setChartWrapper}
      data-testid="line-chart-container"
      className={classNames(styles.wrapper, {
        [styles.interactive]: interactive,
        [styles['tooltip-visible']]: tooltipIsVisible,
        [styles['dragging-left']]: offsetDrag === 'left',
        [styles['dragging-right']]: offsetDrag === 'right',
      })}
    >
      <h2 className={styles['chart-title']}>{title}</h2>

      <ExportChartButton
        filename={exportFilename}
        chartWrapper={chartWrapper}
        className={styles['export-button']}
      />

      <ResponsiveContainer
        width={width}
        height={height}
        className={styles['chart-wrapper']}
      >
        <RechartsLineChart
          data={lines}
          onMouseUp={handleChartMouseUp}
          onMouseDown={handleChartMouseDown}
          onMouseMove={handleChartMouseMove}
          margin={{ top: 0, left: -25, right: 40, bottom: -10 }}
        >
          <CartesianGrid className={styles.grid} />

          <XAxis
            dataKey="x"
            height={80}
            type="number"
            label={xLabelObject}
            tickCount={xTickCount}
            className={styles.axis}
            tickFormatter={xTickFormatter(t)}
            domain={[0, (dataMax: number) => Math.round(dataMax + 1)]}
          />

          <YAxis
            width={120}
            label={yLabelObject}
            tickCount={yTickCount}
            className={styles.axis}
            tickFormatter={yTickFormatter(t)}
          />

          {renderStepReferences({ step, maxX })}

          {renderReference({
            chartDomain,
            side: 'left',
            offset: offsetLeft,
            onMouseLeave: handleLeaveOffset,
            onMouseEnter: handleEnterOffsetLeft,
          })}

          {renderReference({
            chartDomain,
            side: 'right',
            offset: offsetRight,
            onMouseLeave: handleLeaveOffset,
            onMouseEnter: handleEnterOffsetRight,
          })}

          {!!tooltipIsActive && (
            <Tooltip
              cursor={false}
              isAnimationActive={false}
              content={
                <div className={styles.tooltip}>
                  {tooltipFormatter
                    ? tooltipFormatter(tooltipContent)
                    : tooltipContent}
                </div>
              }
            />
          )}

          {data.map((line, i) => (
            <Line
              dot={false}
              type="monotone"
              dataKey={line.name}
              stroke={line.color}
              // eslint-disable-next-line react/no-array-index-key
              key={`${line.name}-${i}`}
              isAnimationActive={false}
              strokeWidth={line.strokeWidth}
              className={styles['data-line']}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
