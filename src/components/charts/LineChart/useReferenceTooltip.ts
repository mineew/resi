import { useCallback, useState } from 'react';

let timeout: null | ReturnType<typeof setTimeout> = null;

function useReferenceTooltip(visibilityDelay = 100) {
  const [tooltipContent, setTooltipContent] = useState(0);
  const [tooltipIsActive, setTooltipIsActive] = useState(false);
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

  const enableTooltip = useCallback(
    (x: number) => {
      setTooltipIsActive(true);

      timeout = setTimeout(() => {
        setTooltipIsVisible(true);
      }, visibilityDelay);

      setTooltipContent(x);
    },
    [visibilityDelay],
  );

  const disableTooltip = useCallback(() => {
    setTooltipIsActive(false);
    setTooltipIsVisible(false);
    if (timeout) clearTimeout(timeout);
  }, []);

  return {
    enableTooltip,
    tooltipContent,
    disableTooltip,
    tooltipIsActive,
    tooltipIsVisible,
  };
}

export default useReferenceTooltip;
