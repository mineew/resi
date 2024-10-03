import * as Radix from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import { Check } from 'lucide-react';
import { useId } from 'react';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  hasBoldLabel?: boolean;
  size?: 'small' | 'default';
}

function Checkbox(props: CheckboxProps) {
  const {
    label,
    checked,
    id: providedId,
    size = 'default',
    hasBoldLabel = false,
    onCheckedChange,
  } = props;

  const defaultId = useId();
  const id = providedId || defaultId;

  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      <Radix.Root
        id={id}
        checked={checked}
        className={styles.root}
        onCheckedChange={onCheckedChange}
      >
        <Radix.Indicator className={styles.indicator} forceMount>
          <Check strokeWidth={3} className={styles.icon} />
        </Radix.Indicator>
      </Radix.Root>

      <label
        className={classNames(styles.label, {
          [styles.bold]: hasBoldLabel,
        })}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
