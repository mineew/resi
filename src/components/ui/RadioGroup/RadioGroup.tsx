import * as Radix from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import { useId } from 'react';

import styles from './RadioGroup.module.css';
import RadioGroupItem, { type RadioGroupItemProps } from './RadioGroupItem';

interface RadioGroupProps {
  label?: string;
  items: RadioGroupItemProps[];
  value: string;
  onValueChange: (value: string) => void;
  size?: 'default' | 'small';
}

function RadioGroup(props: RadioGroupProps) {
  const { label, items, value, onValueChange, size = 'default' } = props;

  const firstItemProvidedId = items[0]?.id;
  const firstItemDefaultId = useId();
  const firstItemId = firstItemProvidedId || firstItemDefaultId;

  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      {label && (
        <label
          className={classNames(styles.label, styles.bold)}
          htmlFor={firstItemId}
        >
          {label}
        </label>
      )}

      <Radix.Root
        className={styles.root}
        value={value}
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
