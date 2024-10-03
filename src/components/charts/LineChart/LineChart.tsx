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
  tooltipFormatter?: (tooltipContent: number) => string;
  onChangeOffsetLeft?: (offset: number) => void;
  onChangeOffsetRight?: (offset: number) => void;
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
    offsetLeft: defaultOffsetLeft = 0,
    exportFilename = 'line-chart.png',
    offsetRight: defaultOffsetRight = 0,
    onChangeOffsetLeft,
    onChangeOffsetRight,
  } = props;

  const { t } = useTranslation();

  const [chartWrapper, setChartWrapper] = useState<HTMLDivElement | null>(null);

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
      className={classNames(styles.wrapper, {
        [styles.interactive]: interactive,
        [styles['tooltip-visible']]: tooltipIsVisible,
        [styles['dragging-left']]: offsetDrag === 'left',
        [styles['dragging-right']]: offsetDrag === 'right',
      })}
      ref={setChartWrapper}
      data-testid="line-chart-container"
    >
      <h2 className={styles['chart-title']}>{title}</h2>

      <ExportChartButton
        className={styles['export-button']}
        chartWrapper={chartWrapper}
        filename={exportFilename}
      />

      <ResponsiveContainer
        className={styles['chart-wrapper']}
        width={width}
        height={height}
      >
        <RechartsLineChart
          data={lines}
          margin={{ top: 0, left: -25, right: 40, bottom: -10 }}
          onMouseDown={handleChartMouseDown}
          onMouseUp={handleChartMouseUp}
          onMouseMove={handleChartMouseMove}
        >
          <CartesianGrid className={styles.grid} />

          <XAxis
            className={styles.axis}
            dataKey="x"
            type="number"
            tickCount={xTickCount}
            domain={[0, (dataMax: number) => Math.round(dataMax + 1)]}
            label={xLabelObject}
            tickFormatter={xTickFormatter(t)}
            height={80}
          />

          <YAxis
            className={styles.axis}
            tickCount={yTickCount}
            label={yLabelObject}
            tickFormatter={yTickFormatter(t)}
            width={120}
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

          {tooltipIsActive && (
            <Tooltip
              content={() => {
                return (
                  <div className={styles.tooltip}>
                    {tooltipFormatter
                      ? tooltipFormatter(tooltipContent)
                      : tooltipContent}
                  </div>
                );
              }}
              cursor={false}
              isAnimationActive={false}
            />
          )}

          {data.map((line, i) => (
            <Line
              className={styles['data-line']}
              key={`${line.name}-${i}`}
              dataKey={line.name}
              stroke={line.color}
              strokeWidth={line.strokeWidth}
              type="monotone"
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
