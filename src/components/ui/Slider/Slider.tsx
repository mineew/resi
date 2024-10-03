import * as Radix from '@radix-ui/react-slider';
import classNames from 'classnames';
import { useCallback, useId, useMemo } from 'react';

import styles from './Slider.module.css';

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  hasBoldLabel?: boolean;
  size?: 'default' | 'small';
  shouldDisplayValue?: boolean;
  valueFormatter?: (value: number) => string;
}

function Slider(props: SliderProps) {
  const {
    value,
    min = 0,
    max = 10,
    step = 1,
    label = '',
    id: providedId,
    size = 'default',
    hasBoldLabel = false,
    shouldDisplayValue = true,
    valueFormatter = (unformatted) => unformatted.toString(),
    onValueChange,
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

  const sliderValue = useMemo(() => {
    return [value];
  }, [value]);

  const handleSliderChange = useCallback(
    (newValue: number[]) => {
      onValueChange(newValue[0]);
    },
    [onValueChange],
  );

  const labelElement = (
    <label
      className={classNames(styles.label, {
        [styles.bold]: hasBoldLabel,
      })}
      htmlFor={id}
    >
      {label}
    </label>
  );

  const valueElement = (
    <div className={styles.value}>{valueFormatter(value)}</div>
  );

  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      {(!!label || shouldDisplayValue) && (
        <div className={styles['label-wrapper']}>
          {!!label && labelElement}
          {shouldDisplayValue && valueElement}
        </div>
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
