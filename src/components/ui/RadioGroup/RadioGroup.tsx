import * as Radix from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import { useId } from 'react';

import RadioGroupItem, { type RadioGroupItemProps } from './RadioGroupItem';

import styles from './RadioGroup.module.css';

interface RadioGroupProps {
  value: string;
  items: RadioGroupItemProps[];
  onValueChange: (value: string) => void;
  label?: string;
  size?: 'small' | 'default';
}

function RadioGroup(props: RadioGroupProps) {
  const { label, items, value, size = 'default', onValueChange } = props;

  const firstItemProvidedId = items[0]?.id;
  const firstItemDefaultId = useId();
  const firstItemId = firstItemProvidedId || firstItemDefaultId;

  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      {label && (
        <label
          htmlFor={firstItemId}
          className={classNames(styles.label, styles.bold)}
        >
          {label}
        </label>
      )}

      <Radix.Root
        value={value}
        className={styles.root}
        onValueChange={onValueChange}
      >
        {items.map((item, idx) => (
          <RadioGroupItem
            {...item}
            key={`${item.value}-${idx}`}
            id={idx === 0 ? firstItemId : item.id}
          />
        ))}
      </Radix.Root>
    </div>
  );
}

export default RadioGroup;
export type { RadioGroupItemProps as RadioGroupItem };
