import { useCallback, useState } from 'react';

import useReferenceOver from './useReferenceOver';
import useReferenceTooltip from './useReferenceTooltip';

interface ChartMouseMoveEvent {
  activeLabel?: string;
}

interface UseReferenceDraggingOptions {
  interactive?: boolean;
  gap?: number;
  offsetLeft?: number;
  onChangeOffsetLeft?: (offset: number) => void;
  offsetRight?: number;
  onChangeOffsetRight?: (offset: number) => void;
}

function useReferenceDragging(options: UseReferenceDraggingOptions) {
  const {
    interactive = false,
    gap = 1,
    offsetLeft: offsetLeftMM,
    onChangeOffsetLeft,
    offsetRight: offsetRightMM,
    onChangeOffsetRight,
  } = options;

  const offsetLeft = offsetLeftMM ? offsetLeftMM / 10 : undefined;
  const offsetRight = offsetRightMM ? offsetRightMM / 10 : undefined;

  const {
    tooltipContent,
    tooltipIsActive,
    tooltipIsVisible,
    enableTooltip,
    disableTooltip,
  } = useReferenceTooltip();

  const {
    offsetOver,
    handleEnterOffsetLeft,
    handleEnterOffsetRight,
    handleLeaveOffset,
  } = useReferenceOver();

  const [offsetDrag, setOffsetDrag] = useState<'left' | 'right' | null>(null);

  const handleChartMouseUp = useCallback(() => {
    setOffsetDrag(null);
    disableTooltip();
  }, [disableTooltip]);

  const handleChartMouseDown = useCallback(() => {
    setOffsetDrag(offsetOver);
  }, [offsetOver]);

  const handleChartMouseMove = useCallback(
    (e: ChartMouseMoveEvent) => {
      if (!offsetDrag || !e.activeLabel) {
        disableTooltip();
        return;
      }

      const x = Number(e.activeLabel);

      if (offsetDrag === 'left') {
        if (offsetRight !== undefined && x > offsetRight - gap) {
          onChangeOffsetLeft?.((offsetRight - gap) * 10);
          disableTooltip();
        } else {
          onChangeOffsetLeft?.(x * 10);
          enableTooltip(x * 10);
        }
      }

      if (offsetDrag === 'right') {
        if (offsetLeft !== undefined && x < offsetLeft + gap) {
          onChangeOffsetRight?.((offsetLeft + gap) * 10);
          disableTooltip();
        } else {
          onChangeOffsetRight?.(x * 10);
          enableTooltip(x * 10);
        }
      }
    },
    [
      gap,
      offsetLeft,
      onChangeOffsetLeft,
      offsetRight,
      onChangeOffsetRight,
      offsetDrag,
      enableTooltip,
      disableTooltip,
    ],
  );

  if (interactive) {
    return {
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
    };
  }

  return {
    offsetDrag: null,
    tooltipIsActive: false,
    tooltipIsVisible: false,
    tooltipContent: 0,
    handleEnterOffsetLeft: undefined,
    handleEnterOffsetRight: undefined,
    handleLeaveOffset: undefined,
    handleChartMouseDown: undefined,
    handleChartMouseUp: undefined,
    handleChartMouseMove: undefined,
  };
}

export default useReferenceDragging;
