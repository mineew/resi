import * as Radix from '@radix-ui/react-radio-group';
import { useId } from 'react';

import styles from './RadioGroup.module.css';

interface RadioGroupItemProps {
  label: string;
  value: string;
  id?: string;
}

function RadioGroupItem(props: RadioGroupItemProps) {
  const { label, value, id: providedId } = props;
  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div className={styles['item-wrapper']}>
      <Radix.Item id={id} value={value} className={styles.item} />

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}

export default RadioGroupItem;
export type { RadioGroupItemProps };
