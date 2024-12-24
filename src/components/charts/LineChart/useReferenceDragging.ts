import { useCallback, useState } from 'react';

import useReferenceOver from './useReferenceOver';
import useReferenceTooltip from './useReferenceTooltip';

interface ChartMouseMoveEvent {
  activeLabel?: string;
}

interface UseReferenceDraggingOptions {
  gap?: number;
  offsetLeft?: number;
  offsetRight?: number;
  interactive?: boolean;
  onChangeOffsetLeft?: (offset: number) => void;
  onChangeOffsetRight?: (offset: number) => void;
}

function useReferenceDragging(options: UseReferenceDraggingOptions) {
  const {
    gap = 1,
    offsetLeft,
    offsetRight,
    onChangeOffsetLeft,
    interactive = false,
    onChangeOffsetRight,
  } = options;

  const {
    enableTooltip,
    tooltipContent,
    disableTooltip,
    tooltipIsActive,
    tooltipIsVisible,
  } = useReferenceTooltip();

  const {
    offsetOver,
    handleLeaveOffset,
    handleEnterOffsetLeft,
    handleEnterOffsetRight,
  } = useReferenceOver();

  const [offsetDrag, setOffsetDrag] = useState<null | 'left' | 'right'>(null);

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
          onChangeOffsetLeft?.(offsetRight - gap);
          disableTooltip();
        } else {
          onChangeOffsetLeft?.(x);
          enableTooltip(x);
        }
      }

      if (offsetDrag === 'right') {
        if (offsetLeft !== undefined && x < offsetLeft + gap) {
          onChangeOffsetRight?.(offsetLeft + gap);
          disableTooltip();
        } else {
          onChangeOffsetRight?.(x);
          enableTooltip(x);
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
      tooltipContent,
      tooltipIsActive,
      tooltipIsVisible,
      handleLeaveOffset,
      handleChartMouseUp,
      handleChartMouseDown,
      handleChartMouseMove,
      handleEnterOffsetLeft,
      handleEnterOffsetRight,
    };
  }

  return {
    offsetDrag: null,
    tooltipContent: 0,
    tooltipIsActive: false,
    tooltipIsVisible: false,
    handleLeaveOffset: undefined,
    handleChartMouseUp: undefined,
    handleChartMouseDown: undefined,
    handleChartMouseMove: undefined,
    handleEnterOffsetLeft: undefined,
    handleEnterOffsetRight: undefined,
  };
}

export default useReferenceDragging;
