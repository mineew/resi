import classNames from 'classnames';
import { memo } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { type RESIFile } from '@/store/types/RESIFile';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './RESIFileChart.module.css';
import convertFilesToChartData from './convertFilesToChartData';
import renderReference from './renderReference';
import renderScaleReference from './renderScaleReference';
import useReferenceDragging from './useReferenceDragging';

interface RESIFileChartProps {
  files: RESIFile[];
  scale?: number;
  shouldRenderScale?: boolean;
  offsetGap?: number;
  offsetLeft?: number;
  onChangeOffsetLeft?: (offset: number) => void;
  offsetRight?: number;
  onChangeOffsetRight?: (offset: number) => void;
  interactive?: boolean;
}

const RESIFileChart = memo((props: RESIFileChartProps) => {
  const {
    files,
    scale,
    shouldRenderScale,
    offsetGap,
    offsetLeft: defaultOffsetLeft = 0,
    onChangeOffsetLeft,
    offsetRight: defaultOffsetRight = 0,
    onChangeOffsetRight,
    interactive,
  } = props;

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

  const { data, maxX, maxY } = convertFilesToChartData(files, scale);
  const chartDomain = [0, 0, maxX, maxY] as const;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.interactive]: interactive,
        [styles['dragging-left']]: offsetDrag === 'left',
        [styles['dragging-right']]: offsetDrag === 'right',
        [styles['tooltip-visible']]: tooltipIsVisible,
      })}
    >
      <h2 className={styles['chart-title']}>Резистограммы</h2>

      <ResponsiveContainer className={styles['chart-wrapper']}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 40, left: 20, bottom: 0 }}
          onMouseDown={handleChartMouseDown}
          onMouseUp={handleChartMouseUp}
          onMouseMove={handleChartMouseMove}
        >
          <CartesianGrid className={styles.grid} />

          <YAxis
            className={styles.axis}
            tickCount={20}
            label={{ value: 'RESI', position: 'insideLeft', angle: -90 }}
          />

          <XAxis
            className={styles.axis}
            dataKey="x"
            type="number"
            tickCount={20}
            domain={[0, (dataMax: number) => Math.round(dataMax + 1)]}
            label={{ value: 'см', position: 'center' }}
            height={70}
          />

          {shouldRenderScale && renderScaleReference({ scale, maxX })}

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
                  <div className={styles.tooltip}>{tooltipContent} мм</div>
                );
              }}
              cursor={false}
              isAnimationActive={false}
            />
          )}

          {files.map((file, i) => (
            <Line
              className={styles['data-line']}
              key={`${file.name}-${i}`}
              dataKey={file.name}
              stroke={file.color}
              strokeWidth={file.strokeWidth}
              type="monotone"
              unit="RESI"
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

RESIFileChart.displayName = 'RESIFileChart';

export default RESIFileChart;
