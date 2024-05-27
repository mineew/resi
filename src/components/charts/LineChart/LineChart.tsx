import classNames from 'classnames';
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

import { xTickFormatter, yTickFormatter } from '@/components/charts/utils';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './LineChart.module.css';
import { type LineChartDataset } from './LineChartDataset';
import convertChartData from './convertChartData';
import renderReference from './renderReference';
import renderStepReferences from './renderStepReferences';
import useReferenceDragging from './useReferenceDragging';

interface LineChartProps {
  title: string;
  data: LineChartDataset[];
  xLabel?: string;
  xConverter?: (x: number) => number;
  xTickCount?: number;
  yLabel?: string;
  yTickCount?: number;
  offsetGap?: number;
  offsetLeft?: number;
  onChangeOffsetLeft?: (offset: number) => void;
  offsetRight?: number;
  onChangeOffsetRight?: (offset: number) => void;
  tooltipFormatter?: (tooltipContent: number) => string;
  step?: number;
  interactive?: boolean;
}

function LineChart(props: LineChartProps) {
  const {
    title,
    data,
    xLabel,
    xConverter,
    xTickCount,
    yLabel,
    yTickCount,
    offsetGap,
    offsetLeft: defaultOffsetLeft = 0,
    onChangeOffsetLeft,
    offsetRight: defaultOffsetRight = 0,
    onChangeOffsetRight,
    tooltipFormatter,
    step,
    interactive,
  } = props;

  const { t } = useTranslation();

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
    tooltipIsActive,
    tooltipIsVisible,
    tooltipContent,
    handleEnterOffsetLeft,
    handleEnterOffsetRight,
    handleLeaveOffset,
    handleChartMouseDown,
    handleChartMouseUp,
    handleChartMouseMove,
  } = useReferenceDragging({
    interactive,
    gap: offsetGap,
    offsetLeft,
    onChangeOffsetLeft: setOffsetLeft,
    offsetRight,
    onChangeOffsetRight: setOffsetRight,
  });

  const { lines, maxX, maxY } = convertChartData(data, xConverter);
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
        value: yLabel,
        position: 'insideLeft',
        angle: -90,
      };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.interactive]: interactive,
        [styles['dragging-left']]: offsetDrag === 'left',
        [styles['dragging-right']]: offsetDrag === 'right',
        [styles['tooltip-visible']]: tooltipIsVisible,
      })}
    >
      <h2 className={styles['chart-title']}>{title}</h2>

      <ResponsiveContainer className={styles['chart-wrapper']}>
        <RechartsLineChart
          data={lines}
          margin={{ top: 0, right: 40, left: 20, bottom: 0 }}
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
            height={70}
          />

          <YAxis
            className={styles.axis}
            tickCount={yTickCount}
            label={yLabelObject}
            tickFormatter={yTickFormatter(t)}
          />

          {renderStepReferences({ step, maxX })}

          {renderReference({
            offset: offsetLeft,
            side: 'left',
            chartDomain,
            onMouseEnter: handleEnterOffsetLeft,
            onMouseLeave: handleLeaveOffset,
          })}

          {renderReference({
            offset: offsetRight,
            side: 'right',
            chartDomain,
            onMouseEnter: handleEnterOffsetRight,
            onMouseLeave: handleLeaveOffset,
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
