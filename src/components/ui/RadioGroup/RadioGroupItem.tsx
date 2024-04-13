import * as Radix from '@radix-ui/react-radio-group';
import { useId } from 'react';

import styles from './RadioGroup.module.css';

interface RadioGroupItemProps {
  id?: string;
  label: string;
  value: string;
}

function RadioGroupItem(props: RadioGroupItemProps) {
  const { id: providedId, label, value } = props;
  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div className={styles['item-wrapper']}>
      <Radix.Item className={styles.item} id={id} value={value} />

      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioGroupItem;
export type { RadioGroupItemProps };
