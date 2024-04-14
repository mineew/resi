import * as Radix from '@radix-ui/react-slider';
import classNames from 'classnames';
import { useCallback, useId, useMemo } from 'react';

import styles from './Slider.module.css';

interface SliderProps {
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  hasBoldLabel?: boolean;
  value: number;
  onValueChange: (value: number) => void;
  size?: 'default' | 'small';
}

function Slider(props: SliderProps) {
  const {
    id: providedId,
    min = 1,
    max = 10,
    step = 1,
    label = '',
    hasBoldLabel = false,
    value,
    onValueChange,
    size = 'default',
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

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
    <div className={classNames(styles.wrapper, styles[size])}>
      {label && (
        <label
          className={classNames(styles.label, {
            [styles.bold]: hasBoldLabel,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}

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

        <Radix.Thumb asChild>
          <button className={styles.thumb} id={id} type="button" />
        </Radix.Thumb>
      </Radix.Root>
    </div>
  );
}

export default Slider;
