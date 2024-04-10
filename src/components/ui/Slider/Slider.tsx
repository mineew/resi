import * as Radix from '@radix-ui/react-slider';
import { useCallback, useMemo } from 'react';

import styles from './Slider.module.css';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onValueChange: (value: number) => void;
}

function Slider(props: SliderProps) {
  const { min = 1, max = 10, step = 1, value, onValueChange } = props;

  const sliderValue = useMemo(() => {
    return [value];
  }, [value]);

  const handleSliderChange = useCallback(
    (value: number[]) => {
      onValueChange(value[0]);
    },
    [onValueChange],
  );

  return (
    <Radix.Root
      className={styles.root}
      min={min}
      max={max}
      step={step}
      value={sliderValue}
      onValueChange={handleSliderChange}
    >
      <Radix.Track className={styles.track}>
        <Radix.Range className={styles.range} />
      </Radix.Track>

      <Radix.Thumb className={styles.thumb} />
    </Radix.Root>
  );
}

export default Slider;
